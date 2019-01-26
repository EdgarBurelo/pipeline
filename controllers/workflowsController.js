const db = require("../models");

module.exports = {
  save: (req, res) => {
    db.workflows.create(req.body).then((data) => {
      res.json(data);
    });
  },

  findAll: (req, res) => {
    db.workflows.findAll().then((data) => {
      res.json(data);
    });
  },

  findOne: (req, res) => {
    db.workflows.findOne({where: {id: req.params.id}}).then((data) => {
      res.json(data)
    });
  }

};