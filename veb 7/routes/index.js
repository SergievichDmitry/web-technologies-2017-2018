const controllers = require('../controllers/controllers');
const express = require('express');

const router = express.Router();

router.get('/movies', controllers.all)
router.get('/search', controllers.search)
router.get('/sort', controllers.sort)
router.get('/page', controllers.pagination)
router.get('/id', controllers.id)

module.exports = router;