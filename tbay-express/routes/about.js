//about.js

var express = require('express')
var router = express.Router()

/* GET page. */
router.get('/about', function (req, res) {
  res.render('about')
})

module.exports = router
