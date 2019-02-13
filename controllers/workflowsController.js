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
      attributes: ["id","flowName"],
      where: { companyId: req.params.companyId },
      include: [db.leads]
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