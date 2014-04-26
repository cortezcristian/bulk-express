var userAuth = module.exports = function(req, res, next){
    //authorize role
    if(typeof req.user != "undefined"){
        next();
    }else{
        //Not authorized go to the login form
        res.redirect('/');
    }
}
