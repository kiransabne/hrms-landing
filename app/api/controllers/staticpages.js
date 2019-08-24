const check = require('express-validator').check;
const validationResult = require('express-validator').validationResult;

module.exports = {
  contactPage: function(req, res, next){
    res.render('contact_page');
  },

  basicFormPage: function(req, res, next){
    console.log('hit form')
    res.render('basicform');
  },

  // .not().isEmpty()
  // .trim()
  // .escape(),
  submitform: function(req, res, next){
    //
    // [check('firstname').exists().isLength({ min: 3 }).trim().escape(),
    //                             check('lastname').exists().isLength({ min: 3 }).trim().escape(),
    //                             check('companyname').isLength({ min: 3 }).trim().escape(),
    //                             check('email').isEmail().normalizeEmail(),
    //                             check('mobile').isNumeric().trim().escape(),
    //                             check('employeecount').isNumeric().trim().escape()
    //                           ],
    //                           function (req, res) {
    //                               const errors = validationResult(req);
    //                               //console.log(req.body);
    //
    //                               if (!errors.isEmpty()) {
    //                                 return res.status(422).jsonp(errors.array());
    //                               } else {
    //                                 //res.send({});
    //                               }
    //                             }


    console.log(req.body);
    req.app.locals.postdb.query('insert into demo_request (first_name, last_name, company_name, email, mobile, employee_count) values ($1, $2, $3, $4, $5, $6)'
                                ,[req.body.firstname, req.body.lastname, req.body.companyname, req.body.email, req.body.mobile, req.body.employeecount], async function(err, result){
                                  if (err){
                                    console.log(err);
                                  } else {
                                    let ans = await result;
                                    console.log(result);
                                    console.log('ddgffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');

return res.redirect('/contact-us');                                  }

                                })

  }
}
