const express = require('express');
const router = express.Router();

const pagesController = require('../controllers/pagesController');
// const applicationsController = require('../controllers/applictionsController');

router.get('/list', pagesController.list);
router.get('/confirm', pagesController.confirm);
router.get('/edit', pagesController.edit);
router.get('/', pagesController.main);

module.exports = router;