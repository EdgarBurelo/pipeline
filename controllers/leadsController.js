const db = require("../models");
var sequelize = require('sequelize');

module.exports = {
  save: function(req, res) {
    db.leads.create(req.body).then(function(data) {
      res.json(data);
    });
  },

  count: function(req, res) {
    db.leads.findAll({
      where: {workflowId: req.params.workflowId}
    }).then(function(data) {
      res.json(data);
    });
  },

  findAll: function(req, res) {
    db.leads.findAll({
      where: {companyId: req.params.companyId},
      include: [{
        model: db.users
      },{
        model: db.workflows
      }]
    }).then(function(data) {
      res.json(data);
    });
  }

};