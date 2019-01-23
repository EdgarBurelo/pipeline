const db = require("../models");

module.exports = {

    findAll: function (req, res) {
        
        db.users.findAll({}).then(function (data) {

            res.json(data);
            
        });
        
    },

    newUser: function(req,res) {

        db.users.create(req.body).then(function (result) {
    
            res.json(result);
    
        });

    },

    editUser: function (req, res) {

        console.log(req.body);

        db.users.update(req.body, {

            where: {

                id: req.body.id

            }

        }).then(function (result) {

            res.json(result);

        });

    }

};
