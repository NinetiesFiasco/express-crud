const {create, readAll, update, _delete} = require('./service')

const post = (req, res) => {
  create(req.body, (error, result) => {
    return error 
      ? res.status(500).send(error)
      : res.json(result)
  })
}

const get = (req, res) => {
  readAll((error, result) => {
    return error 
      ? res.status(500).send(error)
      : res.json(result)
  })
}

const put = (req, res) => {
  update(req.params.id, req.body, (error, result) => {
    return error 
      ? res.status(500).send(error)
      : res.json(result)
  })
}

const deleteRequest = (req, res) => {
  _delete(req.params.id, (error, result) => {
    return error 
      ? res.status(500).send(error)
      : res.json(result)
  })
}

module.exports = {post, get, put, deleteRequest}