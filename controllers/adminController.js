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

    erase:  (req, res) => {

        console.log("HOLA\n\n\n\n\n",req.params.id);

        db.users.destroy({

            where: {

                id: req.params.id

            },

            force: true

        }).then(function (result) {

            res.json(result);

        });

    },

    findAgents: function (req, res) {
        
      db.users.findAll({
        where: {
          profile: "Agent",
          companyId: req.params.companyId
        }
      }).then(function (data) {

          res.json(data);
          
      });
      
  },

};
