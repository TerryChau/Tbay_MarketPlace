// app.js
const path = require('path')

const createError = require('http-errors')
const bodyparser = require('body-parser') //for handling HTTP POST; extracts entire body and exposes it on req.body
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')

require('dotenv').config()

const indexRouter = require('./routes/index')
const mainRouter = require('./routes/main')
const api_mainRouter = require('./routes/api/api_main') //api
const aboutRouter = require('./routes/about')
const itemRouter = require('./routes/item')

mongoose
  .connect(
    `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_NAME}`
  )
  .catch((err) => {
    console.error(`database connection error: ${err}`)
    process.exit()
  })

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(bodyparser.urlencoded({ extended: true })) //see https://github.com/expressjs/body-parser
app.use(bodyparser.json()) //required for api to work

// log to terminal
app.use(logger('dev'))

// routes
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/main', mainRouter)
app.get('/about_es', aboutRouter)
app.use('/item', itemRouter)
app.use('/api', api_mainRouter)

// for Angular Single Page Application
app.use('/', express.static('../tbay-angular/dist/assignment6norouting/'))
app.use('/gallery', express.static('../tbay-angular/dist/assignment6norouting/'))
app.use('/list-sale', express.static('../tbay-angular/dist/assignment6norouting/'))
app.use('/purchase-history', express.static('../tbay-angular/dist/assignment6norouting/'))
app.use('/about', express.static('../tbay-angular/dist/assignment6norouting/'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
