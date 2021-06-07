const mainModel = require('../models/mainModel')

class mainService {
  //list all items
  static list(jsonObj={}) {
    //static permits use of list() without instantiating a mainService object
    return mainModel.find(jsonObj).then((entriesList) => {
      return entriesList
    })
  }
  //find/read
  static find(id) {
    return mainModel.findById(id).then((entry) => {
      return entry
    })
  }
  //create
  static create(obj) {
    var entry = new mainModel(obj)
    return entry.save()
  }
  //update
  static update(id, data) {
    return mainModel.findById(id).then((entry) => {
      entry.set(data)
      entry.save()
      return entry
    })
  }
  //delete
  static delete(id) {
    return mainModel.deleteOne({ _id: id }).then((entry) => {
      //removed
      return entry
    })
  }
}

module.exports.mainService = mainService
