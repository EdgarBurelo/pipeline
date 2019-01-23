const db = require("../models");

module.exports = {
  save: function(req, res) {
    db.leads.create(req.body).then(function(data) {
      res.json(data);
    });
  }

};