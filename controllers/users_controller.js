module.exports.profile = function (req,res){
    return res.render('users',{
        title:'users page'
    });
}

module.exports.signIn = function (req,res){
    return res.render('user_sign_in',{
        title:'Sign In'
    })
}

module.exports.signUp = function (req,res){
    return res.render('user_sign_up',{
        title:'Sign up'
    })
}

// Get the sign up data

module.exports.create = function (req,res){
    
}

// creating session for user

module.exports.createSession = function (req,res){
    
}