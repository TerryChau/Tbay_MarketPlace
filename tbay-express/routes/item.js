const express = require('express')
const itemRouter = express.Router()
const app = express()
const multer = require('multer')
const mainController = require('../controllers/mainController')
const mainModel = require('../models/mainModel')
const fs = require('fs')

//initialize multer to use logic from mainController
const upload = multer({
  storage: mainController.nameFormat,
  fileFilter: mainController.imageFilter,
})

var errorMessageImage = ''
var user = 'John Smith' //need to work on creating User login

// find - GET for editing or deleting Entry
itemRouter.get('/:entryID', (req, res, next) => {
  console.log('loading entry:', req.params.entryID)
  mainModel
    .findOne({ _id: req.params.entryID })
    .then((singleEntry) => {
      res.render('item', {
        entry: singleEntry,
        user: user,
        error: errorMessageImage,
      })
    })
    .catch((err) => {
      if (err) {
        console.log(err)
        res.end('ERROR! Unable to retrieve data from Mongoose')
      }
    })
})

//update - POST For Editing Entry
itemRouter.post('/:entryID', (req, res, next) => {
  console.log('Entering Post')
  mainModel
    .findOne({ _id: req.params.entryID })
    .then((singleEntry) => {
      //singleEntry is returned by Mongoose
      console.log(singleEntry)
      var entry = {
        //entry is the results from the form
        title: req.body.title,
        description: req.body.description,
        author: user,
        listPrice: req.body.listPrice,
        //image:"/static/img/"+req.file.filename  //Need to implement image editing
      }
      console.log(entry)
      singleEntry.set(entry)
      singleEntry.save().then(() => {
        res.redirect('../main')
      })
    })
    .catch(
      (err = {
        if(err) {
          console.log(err)
        },
      })
    )
})

//delete - POST For Delete of Entry
itemRouter.post('/delete/:entryID', (req, res, next) => {
  console.log('Entering Post')
  mainModel
    .findOne({ _id: req.params.entryID })
    .then((singleEntry) => {
      //singleEntry is returned by Mongoose
      console.log(
        'removing',
        process.cwd() + singleEntry.image.replace('static', 'public')
      )
      try {
        fs.unlinkSync(
          process.cwd() + singleEntry.image.replace('static', 'public')
        )
      } catch (err) {
        console.error(err)
      }
      singleEntry.remove().then(() => {
        res.redirect('../../main')
      })
    })
    .catch(
      (err = {
        if(err) {
          console.log(err)
        },
      })
    )
})

module.exports = itemRouter
