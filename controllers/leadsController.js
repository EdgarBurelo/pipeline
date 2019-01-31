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
      attributes: [[sequelize.fn('COUNT', sequelize.col('workflowId')), 'leads_count']],
      where: {workflowId: req.params.workflowId}
    }).then(function(data) {
      res.json(data);
    });
  }

};