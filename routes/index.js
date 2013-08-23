var mongodb = require("mongodb").MongoClient;



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
    MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
        if(err) throw err;

        var collection = db.getCollection("user");
        var info = collection.findOne({username:user, password:password, enable:1});


    });
}