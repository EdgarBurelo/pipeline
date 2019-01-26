const localStrategy = require("passport-local").Strategy;
const db = require("../models");
const bcrypt = require("bcrypt");

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
                    console.log(req.body.name);
                    db.users.create({
                        email: username,
                        password: generateHash(password),
                        profile: "Admin",
                        name: req.body.name,
                        company:{
                            company_name: req.body.company
                        }
                    },{
                        include: [{
                            association: users.companies,
                        }]
                    });

                    // db.companies.create({
                    //     company_name: req.body.company
                    // }).then(result => {
                    //     console.log(result.dataValues.id);
                    //     let newUser = db.users.build({
                    //         email: username,
                    //         password: generateHash(password),
                    //         profile: "Admin",
                    //         name: req.body.name,

                    //     });
                    //     return newUser.save();
                    // });
                    
                    // 
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
    let generateHash = (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    }
}