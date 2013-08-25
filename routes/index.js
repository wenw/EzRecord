var User = require("modules/user");
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Express' });
};

exports.login = function(req,res){
    var user = req.param("username");
    var password = req.param("password");
    var isSave = req.param("isSave");
    User.get(user, password, function(info){
       if(info != null){
           req.session.User = info;
           res.redirect("/main");
       }
        else{
           res.redirect("/");
       }
    });
}