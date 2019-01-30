const db = require("../models");

module.exports = {

    findAll: function (req, res) {
        
        db.leads.findAll({

            where: {

                assignedTo: req.params.id

            }

        }).then(function (data) {

            res.send(data);
            
        });
        
    }
};


//where: {assignedTo: req.params.id}