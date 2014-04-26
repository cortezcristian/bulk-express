// Module dependencies.
var express = require('express');
var http = require('http');
var path = require('path')
  //, fixtureLoader = require('mongoose-fixtures')
  , utils = require('./utils')
  , passport = require('passport')
  , config = exports.config = require('./config');

//Error
process.on('uncaughtException', function(err) {
      console.log("Exception", err.stack);
});

// Database Connection
//var dbConex = exports.dbConex = utils.dbConnection(config.db.domain,config.db.name,config.db.user,config.db.pass);

// Express 
var app = exports.app = express();

// all environments
app.set('port', process.env.PORT || config.app.port || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({secret: config.session.secret}));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routes
require('./routes/main');
//require('./routes/auth');

// Load Fixtures
//fixtureLoader.load('./fixtures');

var server = exports.server = http.createServer(app).listen(app.get('port'),  config.app.domain, function(){
  console.log('Express server listening on ' + config.app.domain +':' + app.get('port'));
});

