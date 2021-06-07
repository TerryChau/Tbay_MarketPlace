//main.js

const express = require('express')
const mainRouter = express.Router()
const multer = require('multer')
const mainController = require('../controllers/mainController')
const mainModel = require('../models/mainModel')
const mainService = require('../service/mainService').mainService

//multer is middleware for handling multipart/form-data
//initialize multer to use logic from mainController
const upload = multer({
  storage: mainController.nameFormat,
  fileFilter: mainController.imageFilter,
})

var errorMessage = ''
var user = 'John Smith' //need to work on creating User login

// list - GET home page.
mainRouter.get('/', (req, res, next) => {
  console.log('***errorMessage:', errorMessage)
  mainService
    .list() //use api call
    //mainModel.find({})
    .then((entriesList) => {
      res.render('main', {
        entries: entriesList,
        user: user,
        errorMessage: errorMessage,
      })
      errorMessage = ''
    })
    .catch((err) => {
      if (err) {
        console.log(err)
        res.end('ERROR! Unable to retrieve data from Mongoose')
      }
    })
})

// POST form data, works with body-parser
//upload.single('image') is added to upload a single image, when used with
//enctype="multipart/form-data" in main.pug
mainRouter.post('/', upload.single('image_upload'), (req, res, next) => {
  var entry = {
    title: req.body.title,
    description: req.body.description,
    author: user,
    listPrice: req.body.listPrice,
  }

  //check for undefined image
  try {
    entry.image = '/static/img/' + req.file.filename
  } catch (err) {
    entry.image = '/static/no_img/no_image.png'
  }

  var mongooseEntry = new mainModel(entry)
  mongooseEntry
    .save()
    .then(() => {
      res.redirect('/main')
    })
    .catch((err) => {
      console.log(err.stack)
      errorMessage =
        'Unable to save entry to Mongoose.  Must include at least Title and Price.'
      res.redirect('/main')
    })
})

// Errors
mainRouter.use(function (err, req, res, next) {
  console.error(err.stack)
  // see mainController for IncorrectImageType error (lecture 7.35)
  if (err.message == 'IncorrectImageType') {
    errorMessage = 'Please select an image type file. (gif, jpeg, jpg, png)'
    res.redirect('/main')
  } else {
    next(err)
  }
})

module.exports = mainRouter
