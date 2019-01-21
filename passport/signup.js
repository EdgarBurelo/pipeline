const localStrategy = require("passport-local").Strategy;
const db = require("../models");
//const bycrypt = require("bcrypt");

module.exports = passport => {
    passport.use('signup', new localStrategy({
        passReqToCallback: true
    },
    (req,username,password,done) => {
        process.nextTick(() => {
            db.users.findOne({where: {"email":username}}).then(user => {
                if(user) {
                    return done(null, false);
                } else {
                    let newUser = db.users.build({
                        email: username,
                        password: db.users.generateHash(password),
                    });
                    return newUser.save();
                }
            }).then(newUser => {
                done(null, newUser);
                return null;
            }).catch(err => {
                console.log(`Err ${err}`);
                done(err);
                return null;
            });
        })
    }
    ));
}