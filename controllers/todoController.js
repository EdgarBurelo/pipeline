const db = require("../models");

module.exports = {

    findAll: function (req, res) {
        
        db.leads.findAll({where: {id: req.params.id}}).then(function (data) {

            res.json(data);
            
        });
        
    }
};