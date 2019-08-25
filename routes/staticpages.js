const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { sanitizeBody } = require('express-validator');
const staticpagesController = require('../app/api/controllers/staticpages');
const check = require('express-validator').check;
const validationResult = require('express-validator').validationResult;

router.get('/contact-us', staticpagesController.contactPage);
router.get('/basicform', staticpagesController.basicFormPage);
//router.post('/submit-form', staticpagesController.submitform);
router.get('/features', staticpagesController.featuresPage);
router.get('/demo_form', staticpagesController.testform);
router.post('/submi', staticpagesController.submi);

module.exports = router;
//
// app.post('/form',
// , (req, res) => {
//   const name  = req.body.name
//   const email = req.body.email
//   const age   = req.body.age
//   const name  = req.body.name
//   const email = req.body.email
//   const age   = req.body.age
// })
