const localStrategy = require("passport-local").Strategy;
const db = require("../models");
const bycrypt = require("bcrypt");

module.exports = passport => {
    passport.use('signup', new localStrategy({

    },
    (req,username,password,done) => {
        
    }
    ));
}