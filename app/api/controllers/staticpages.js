const check = require('express-validator').check;
const validationResult = require('express-validator').validationResult;

module.exports = {
  contactPage: function(req, res, next){
    res.render('contact_page');
  },

  employeeSelfServiceFeaturePage: function(req, res, next){
    res.render('features/employeeselfservice')
  },

  attendanceManagementFeaturePage: function(req, res, next){
    res.render('features/attendancemanagementpage')
  },

  leaveManagemetFeaturePage: function(req, res, next){
    res.render('features/leavemanagementpage')
  },

  employeedirectoryfeaturepage: function(req, res, next){
    res.render('features/employeedirectorypage')
  },

  claimmanagementfeaturepage: function(req, res, next){
    res.render('features/claimmanagementpage')
  },

  payrollmanagementfeaturepage: function(req, res, next){
    res.render('features/payrollmanagementpage')

  },

  travelmanagementfeaturepage: function(req, res, next){
    res.render('features/travelandodmanagement')
  },

  trainingmanagementfeaturepage: function(req, res, next){
    res.render('features/trainingmanagementpage')
  },

  processautomationfeaturepage: function(req, res, next){
    res.render('features/processautomationmanagementpage')

  },

  employeedocumentfeaturepage: function(req, res, next){
    res.render('features/employeedocmanagement')
  },

  performancemanagementfeaturepage: function(req, res, next){
    res.render('features/performancemanagement')
  },

  mobileapplicationfeaturepage: function(req, res, next){
    res.render('features/mobileapplicationpage')

  },

  featuresPage: function(req, res, next){
    res.render('features_page');
  },

  basicFormPage: function(req, res, next){
    console.log('hit form')
    res.render('basicform');
  },

  testform: function(req, res, next){
    console.log(req.body)

    res.render('testform',{don: 0});

  },

  submi: function(req, res, next){
    console.log(req.body)
    console.log(req.body);
    req.app.locals.postdb.query('insert into demo_request (first_name, last_name, company_name, email, mobile, employee_count) values ($1, $2, $3, $4, $5, $6)'
                                ,[req.body.firstname, req.body.lastname, req.body.companyname, req.body.email, req.body.mobile, req.body.employeecount], async function(err, result){
                                  if (err){
                                    console.log(err);
                                  } else {
                                    let ans = await result;
                                    console.log(ans.rowCount);
                                    if (ans.rowCount == 1){
                                      var data = {submitted: ans.rowCount};
                                      res.render('testform', {don: ans.rowCount});
                                    } else{
                                      res.send("Error");
                                    }

                                  //  console.log('ddgffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
                                    //res.render('features_page');


                                }

                                })
  //  res.render('contact_page');
  },


  ///pages/submit-form

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
                                    console.log(ans.rowCount);
                                    if (ans.rowCount == 1){
                                      res.render('contact_page');
                                    } else{
                                      res.send("Error");
                                    }

                                  //  console.log('ddgffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
                                    //res.render('features_page');


                                }

                                })


  }
}
