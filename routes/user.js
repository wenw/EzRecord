
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.reg = function(req, res){
    res.render("reg", { title:"用户注册"});
}