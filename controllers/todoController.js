const db = require("../models");

module.exports = {

    findAll: function (req, res) {

        //console.log("\n\n\n\n\nTHIS IS ID FOR SEARCH", req.params.id);
        
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