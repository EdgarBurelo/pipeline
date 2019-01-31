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
        
    },

    editOne: function (req, res) {

        db.leads.update({

            nextContactType: req.body.type,
            nextContactStep: req.body.step,
            nextContactDate: req.body.date

        },
        
        {where: {id: req.body.id}}
        
        ).then(edit=>{

            res.json(edit);

        });

    }
};


//where: {assignedTo: req.params.id}