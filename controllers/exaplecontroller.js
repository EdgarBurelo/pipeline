const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.users.findAll({}).then(function (data) {
            res.json(data);
            console.log("Miuada");
        });
        
    }

    
};
