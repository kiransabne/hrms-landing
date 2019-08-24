const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const databaseUrl = require('./config/databaseConfig');
const staticpages_router = require('./routes/staticpages');
const path = require('path');
var postdb;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// set path for static assets


databaseUrl.pool.connect((err, client, done) => {
  if (err) throw err;
  postdb = client;
  app.locals.postdb = client;
//  console.log(app.locals.postdb);

  app.listen(3000)
  // client.query('SELECT * FROM users WHERE id = $1', [1], (err, res) => {
  //   done()
  //   if (err) {
  //     console.log(err.stack)
  //   } else {
  //     console.log(res.rows[0])
  //   }
  // })
})


app.get('/', function(req, res, next){
  res.render('index');


//  res.json({status:"started server", message:"server started on 3000"})
})


app.use('/pages', staticpages_router);




//express error handling
app.use(function(req, res, next){
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
})

app.use(function(err, req, res, next){
  console.log(err);
  if(err.status === 404){
    res.status(404).json({message:"Not Found"});
  } else {
    res.status(500).json({message:"Something went wrong"});
    }
})
