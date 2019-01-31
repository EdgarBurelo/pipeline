const localStrategy = require("passport-local").Strategy;
const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = passport => {
    passport.use('login', new localStrategy({
        passReqToCallback: true
    },
    (req,username,password,done) => {
        
        db.users.findOne({where:{'email':username}}).then((user,err) => {
            console.log(user);
            if (err){
                return done(err);
            }
            if(!user) {
                console.log('User Not Found with username ' + username);
                return done(null,false);  
            }
            
            if(!isValidPassword(user,password)) {
                console.log('Invalid Password');
                return done(null,false); 
            }
           
            return done(null, user);
        });
    }));
    let isValidPassword = (user, password) => {
        return bcrypt.compareSync(password,user.password);
    }
}