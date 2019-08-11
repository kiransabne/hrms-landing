const express = require('express');
const router = express.Router();
const staticpagesController = require('../app/api/controllers/staticpages');

router.get('/contact-us', staticpagesController.contactPage);

module.exports = router;
