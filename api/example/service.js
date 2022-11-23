const ObjectId = require('mongodb').ObjectId
const {collections} = require('../../mongodb')

const create = (data, callback) => {
  data.id = new ObjectId()
  collections.example.insertOne(data, callback)
}

const readAll = (callback) => {
  collections.example.find().toArray(callback)
}

const update = (id, data, callback) => {
  collections.example.updateOne({"_id": ObjectId(id)}, {$set: data}, callback)
}

const _delete = (id, callback) => {
  collections.example.deleteOne({"_id": ObjectId(id)}, callback)
}

module.exports = {create, readAll, update, _delete}