const db = require("../models");
const login = require("./login");
const signup = require('./signup');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        console.log('serializing ');
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        // User.findById(id, function (err, user) {
        //     console.log('deserializing user:', user);
        //     done(err, user);
        // });
        db.users.findOne({
            where: {
                id: id
            }
        }).then((user) => {
            console.log('deserializing user');
            done(null, user);
        }).catch(err => {
            done(null, err);
        });
    });

    // Setting up Passport Strategies for Login and SignUp/Registration
    login(passport);
    signup(passport);


}