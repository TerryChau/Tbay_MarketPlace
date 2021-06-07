//This file is influenced by Professor L. Bouthiller's 08.2-photo-app-example.
//See https://github.com/Harvard-DCE-CSCIE3/cscie31-spring2019/tree/master/08.2-photo-app-example.

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create new schema
//see https://mongoosejs.com/docs/guide.html
const entrySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  author: { type: String, required: true },
  listDate: { type: Date },
  listPrice: { type: Number, default: 0, required: true },
  image: { type: String, default: '/static/no_img/no_image.png' },
  buyer: { type: String, default: '' },
  buyDate: { type: Date },
})

//update date
entrySchema.pre('save', function (next) {
  if (this.buyer) {
    // this save, which comes from service/mainService.js or routes/main.js, is
    // for a purchase, so change purchase date
    this.buyDate = new Date();
  } else {
    this.listDate = new Date();
  }
  next();
})

// export the model with associated name and schema
module.exports = mongoose.model('entrySchema', entrySchema)
