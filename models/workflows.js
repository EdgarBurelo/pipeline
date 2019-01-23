module.exports = function(sequelize, DataTypes) {
  const Workflow = sequelize.define("workflows", { 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    flowName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    action1: {
      type: DataTypes.STRING,
      allowNull: false
    },

    action2Pos: {
      type: DataTypes.STRING,
      allowNull: false
    },

    action2PosDays: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    action2Neg: {
      type: DataTypes.STRING,
      allowNull: false
    },

    action2NegDays: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    action2None: {
      type: DataTypes.STRING,
      allowNull: false
    },

    action2NoneDays: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  });
  return Workflow;
};