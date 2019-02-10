const db = require("../models");
var sequelize = require('sequelize');

module.exports = {
  save: (req, res) => {
    db.workflows.create(req.body).then((data) => {
      res.json(data);
    });
  },

  findAll: (req, res) => {
    db.workflows.findAll({
      attributes: {
        where: { companyId: req.params.companyId },
        include: [[sequelize.fn("COUNT", sequelize.col("leads.workflowId")), "leadsCount"]]
      },
      include: [{
        model: db.leads,
        attributes: ['workflowId']
      }], 
      group: ["workflows.id", "leads.id"]
    }).then((data) => {
      res.json(data);
    });
  },

  findOne: (req, res) => {
    db.workflows.findOne({ where: { id: req.params.id } }).then((data) => {
      res.json(data)
    });
  }

};