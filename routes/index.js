const express = require('express');
const router = express.Router();

const pagesController = require('../controllers/pagesController');
const applicationsController = require('../controllers/applicationsController');

router.get('/search', pagesController.search);
router.get('/search5', pagesController.search5);
router.get('/confirm', pagesController.confirm);
router.get('/edit', pagesController.edit);
router.get('/', pagesController.mainPage);
router.get('/shit', pagesController.shit);
router.get('/delete', pagesController.delete);

router.post('/form',applicationsController.store);
router.post('/edit',applicationsController.edit);
router.post('/delete',applicationsController.delete);
router.post('/decision',applicationsController.decision);

module.exports = router;