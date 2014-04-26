var app = module.parent.exports.app
  , passport = require('passport')
  , config = exports.config = module.parent.exports.config;


/*
// Auth Strategies
require('../auth/authpassport-fb.js');

// Authentication routes

if(config.auth.facebook.clientid.length) {
  app.use('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback', 
    passport.authenticate('facebook', {
      successRedirect: '/',
      failureRedirect: '/'
    })
  );
}

// Custom Local strategies
app.get('/login', function(req, res){
  res.render('login', { title: 'Empresas', section: 'Login', user: req.user});

});

app.post('/login',
  passport.authenticate('loginTest', { successRedirect: '/',
                                   failureRedirect: '/login'})
);
*/

// Logout
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


