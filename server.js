const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const databaseUrl = require('./config/databaseConfig');
const staticpages_router = require('./routes/staticpages');
const path = require('path');
var db;

app.use(express.json());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set path for static assets
app.use(express.static(path.join(__dirname, 'public')));

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

app.listen(3000, function(){
  console.log('Port started on 3000')
})
