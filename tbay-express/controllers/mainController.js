//This file is based on Professor L. Bouthiller's 08.2-photo-app-example.
//See https://github.com/Harvard-DCE-CSCIE3/cscie31-spring2019/tree/master/08.2-photo-app-example.

//This file is for application logic; see Lecture 7.31

const multer = require('multer');
const mainModel = require('../models/mainModel')

// change the naming of the file in public/img
const nameFormat = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/img');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+"-"+file.originalname);
    }
});

// check for correct image filetype or return error
const imageFilter = function(req, file, cb) {
    if (file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        cb(null, true);
    }
    else {
        cb(new Error("IncorrectImageType"), false);
    }
}

module.exports.nameFormat = nameFormat;
module.exports.imageFilter = imageFilter;
