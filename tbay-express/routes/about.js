//about.js

var express = require('express')
var router = express.Router()

/* GET page. */
router.get('/about_es', function (req, res) {
  res.render('about')
})

module.exports = router
