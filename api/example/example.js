const express = require('express');
const router = express.Router();
const {post, get, put, deleteRequest} = require('./controller');

router.post('/', post);
router.get('/', get);
router.put('/:id', put);
router.delete('/:id', deleteRequest);


module.exports = router;