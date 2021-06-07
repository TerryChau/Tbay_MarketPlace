//api_main.js

const express = require('express')
const api_mainRouter = express.Router()
const multer = require('multer')
const mainController = require('../../controllers/mainController')
const mainService = require('../../service/mainService').mainService
const fs = require('fs');

//multer is middleware for handling multipart/form-data
const upload = multer({
  storage: mainController.nameFormat,
  fileFilter: mainController.imageFilter,
}) //initialize multer to use logic from mainController

api_mainRouter.use((req, res, next) => {
  res.set({
    //always return application/json mimetype
    'Content-type': 'application/json',
    // Allow AJAX access from any domain
    'Access-Control-Allow-Origin': '*',
    // Allow methods and headers for 'preflight'
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Access-Control-Allow-Headers',
  })
  // if this is a preflight, we're done and can send the response with our headers, instead of continuing to next
  if (req.method == 'OPTIONS') {
    return res.status(200).end()
  }
  next()
})

// api/list - list all items in database
api_mainRouter.get('/list', (req, res, next) => {
  mainService.list({}).then((entriesList) => {
    console.log(`API: list found: ${entriesList}`)
    res.status(200)
    res.send(JSON.stringify(entriesList))
    //alternatively, may use res.json(entriesList)
  })
  .catch((err) => {
    res.status(404)
    res.end()
  })
})

// api/list_buyer/buyer - list all docs in database with buyer
api_mainRouter.get('/list_buyer/:buyer', (req, res, next) => {
  mainService.list({buyer: req.params.buyer}).then((entriesList) => {
    console.log(`API: list found: ${entriesList}`)
    res.status(200)
    res.send(JSON.stringify(entriesList))
  })
  .catch((err) => {
    res.status(404)
    res.end()
  })
})

// api/list_exclude/author - list all docs in database excluding docs with author
api_mainRouter.get('/list_exclude/:author', (req, res, next) => {
  mainService.list({author: {$not: req.params.author}}).then((entriesList) => {
    console.log(`API: list found: ${entriesList}`)
    res.status(200)
    res.send(JSON.stringify(entriesList))
  })
  .catch((err) => {
    res.status(404)
    res.end()
  })
})

// api/list_exclude/author - list only docs in database with author
api_mainRouter.get('/list_only/:author', (req, res, next) => {
  mainService.list({author: req.params.author}).then((entriesList) => {
    console.log(`API: list found: ${entriesList}`)
    res.status(200)
    res.send(JSON.stringify(entriesList))
  })
  .catch((err) => {
    res.status(404)
    res.end()
  })
})

// api/list_unsold - list only docs in database that are unsold
api_mainRouter.get('/list_unsold', (req, res, next) => {
  mainService.list({buyer: ''}).then((entriesList) => {
    console.log(`API: list found: ${entriesList}`)
    res.status(200)
    res.send(JSON.stringify(entriesList))
  })
  .catch((err) => {
    res.status(404)
    res.end()
  })
})

// api/find/:entryID -find/read
api_mainRouter.get('/find/:entryID', (req, res, next) => {
  mainService
    .find(req.params.entryID)
    .then((entry) => {
      console.log(`API: entry found: ${entry}`)
      res.status(200)
      res.send(JSON.stringify(entry))
    })
    .catch((err) => {
      res.status(404)
      res.end()
    })
})

// api/post POST create
api_mainRouter.post('/post', upload.single('image'), async (req, res, next) => {
  //'image' is the name of the form data for file
  console.log(`***Posting New Entry***`)
  var entry = {
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    listPrice: req.body.listPrice,
  }

  //check for undefined image
  try {
    entry.image = '/static/img/' + req.file.filename
  } catch (err) {
    entry.image = '/static/img/no_image.png'
  }

  console.log(entry)

  try {
    var mongooseEntry = await mainService.create(entry)
    res.status(201)
    res.send(JSON.stringify(mongooseEntry))
  } catch (err) {
    console.log('****Post Error***')
    console.log(err)
    res.status(400) //400 is bad request
    res.end()
  }
})

// api/post/:entryID PUT - update
api_mainRouter.put('/put/:entryID', (req, res, next) => {
  console.log(`***putting ${req.params.entryID} ***`)
  console.log(req.body)
  let putdata = req.body
  mainService
    .update(req.params.entryID, putdata)
    .then((entry) => {
      res.status(200)
      res.send(JSON.stringify(entry))
    })
    .catch((err) => {
      res.status(404)
      res.end()
    })
})

// api/delete/:entryID DELETE - delete
api_mainRouter.delete('/delete/:entryID', (req, res, next) => {

  // delete old image corresponding to doc
  mainService
  .find(req.params.entryID)
  .then((entry) => {
    if (entry.image!='/static/img/no_image.png'){
      image_for_removal=`./public/${entry.image.slice(8,)}`
      fs.unlink(image_for_removal, (err=>{
        if (err) console.log(err);
        else{
          console.log(`Deleted file: ${image_for_removal}`)
        }
      }))
    }
  })
  .catch((err) => {
  })

  // remove doc from MongoDB
  mainService
    .delete(req.params.entryID)
    .then((entry) => {
      console.log(`found entry: ${req.params.entryID} and deleting`)
      res.status(200)
      res.send(JSON.stringify(entry))
    })
    .catch((err) => {
      res.status(404)
      res.end()
    })
})

module.exports = api_mainRouter
