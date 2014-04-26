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

