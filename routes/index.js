const express = require('express');
const router = express.Router();

const pagesController = require('../controllers/pagesController');
const applicationsController = require('../controllers/applicationsController');

router.get('/search', pagesController.search);
router.get('/confirm', pagesController.confirm);
router.get('/edit', pagesController.edit);
router.get('/', pagesController.mainPage);
router.get('/shit', pagesController.shit);

router.post('/form',applicationsController.store);

module.exports = router;