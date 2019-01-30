const db = require("../models");
const sequelize = import('')

module.exports = {
  save: (req, res) => {
    db.workflows.create(req.body).then((data) => {
      res.json(data);
    });
  },

  findAll: (req, res) => {
    console.log(req.body);
    db.workflows.findAll({
      where: {companyId: req.params.companyId}
    }).then((data) => {
      res.json(data);
    });
  },

  findOne: (req, res) => {
    db.workflows.findOne({where: {id: req.params.id}}).then((data) => {
      res.json(data)
    });
  }

};