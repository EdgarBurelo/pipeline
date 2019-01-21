const db = require("../models");
const login = require("./login");

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        console.log('serializing user: '); console.log(user);
        done(null, user._id);
    });

    passport.deserializeUser( (id, done) => {
        // User.findById(id, function (err, user) {
        //     console.log('deserializing user:', user);
        //     done(err, user);
        // });
        db.users.findOne({
            where: {
                "id": id
            }
        }).then((user) => {
            console.log('deserializing user:', user);
            done(err, user);
        });
    });

    // Setting up Passport Strategies for Login and SignUp/Registration
    login(passport);
    //signup(passport);


}