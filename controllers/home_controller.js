module.exports.home= function(req,res){
    console.log(req.cookies);
    res.cookie('username', 17);
    return res.render('home',{
        title:"social app"
    });
}