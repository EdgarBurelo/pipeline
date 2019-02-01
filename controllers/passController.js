const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
    passUpdate: (req,res) => {
        console.log("session:",req.session.passport.user);
        console.log("body", req.body);
        let actualPassword = req.body.actualPassword;
        let newPassword = req.body.newPassword;
        db.users.findOne({
            where: { id: req.session.passport.user }
        }).then(user => {
            console.log(user);
            if (!isValidPassword(user,actualPassword)) {
                res.send({stat:"401",msg:"The Actual password doesnt match!"});
            } else {
                user.updateAttributes({
                    password: generateHash(newPassword)
                }).then(resUp =>{
                    res.send({stat:"200",msg:"The password was updated!"})
                });
            }
            
        });
    }
    
};

let generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

let isValidPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password);
}