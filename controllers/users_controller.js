const User = require('../models/user');

module.exports.profile = function (req,res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err, user){
            if(err){console.log("Error in finding the userid"); return}

            if(user){
                return res.render('user_profile',{
                    title:"User data",
                    user: user
                })
            }
            return res.redirect('/users/sign-in');
        });
    }else{
        return res.redirect('/users/sign-in');
    }

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
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log("Error in finding the user"); return}

        if(!user){
            User.create(req.body , function(err, user){
                if(err){console.log("Error in creating user while signing up"); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    });
}

// creating session for user

module.exports.createSession = function (req,res){
    User.findOne({email:req.body.email}, function(err, user){
        if(err){console.log('error in finding Email of user'); return}

        if(user){

            if(user.password != req.body.password){
                return res.redirect('back');
            }

            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');
        }
        else{
            return res.redirect('back');
        }

    });
}