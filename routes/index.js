const express = require('express');
const router = express.Router();

const pagesController = require('../controllers/pagesController');
/*const applicationsController = require('../controllers/applictionsController');

router.get('/form', pagesController.form);
router.get('/confirm', pagesController.confirm);
router.get('/delete', pagesController.delete);
router.get('/update', pagesController.update);*/
router.get('/', pagesController.main);

module.exports = router;