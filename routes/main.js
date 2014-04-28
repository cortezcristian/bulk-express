var app = module.parent.exports.app
  , config = module.parent.exports.config
  , userAuth = require('../auth/user-auth.js');

// GET
app.get('/', function(req, res){
    res.render('index', { title: 'Bulk Express', section: 'Welcome' });
});

app.get('/responsive', function(req, res){
    res.render('responsive', { title: 'Bulk Express', section: 'Welcome' });
});

app.get('/group-wall', function(req, res){
    res.render('group-wall', { title: 'Bulk Express', section: 'Welcome' });
});

app.get('/offers', function(req, res){
    res.render('offers', { title: 'Bulk Express', section: 'Welcome' });
});
