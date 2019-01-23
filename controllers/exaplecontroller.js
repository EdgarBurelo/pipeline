const db = require("../models");

module.exports = {

    findAll: function (req, res) {
        
        db.users.findAll({}).then(function (data) {
            res.json(data);
            console.log("Miuada");
        });
        
    },

    newUser: function(req,res) {

        console.log(req.body);

        db.users.create(req.body).then(function (result) {
    
    
            res.json(result);
    
        });

    }

};
