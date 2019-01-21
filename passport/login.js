const localStrategy = require("passport-local").Strategy;
const db = require("../models");
const bycrypt = require("bcrypt");

module.exports = passport => {
    passport.use('login', new localStrategy({
        passReqToCallback: true
    },
    (req,username,password,done) => {
        db.user.findOne({where:{'email':username}},(err,user) => {
            if (err){
                return done(err);
            }
            if(!user) {
                console.log('User Not Found with username ' + username);
                return done(null, false, req.flash('message', 'User Not found.'));  
            }
            if(!isValidPassword(user,password)) {
                console.log('Invalid Password');
                return done(null, false, req.flash('message', 'Invalid Password')); // redirect back to login page
            }
            return done(null, user);
        });
    }));
    let isValidPassword = (user, password) => {
        return bycrypt.compareSync(password,user.password)
    }
}