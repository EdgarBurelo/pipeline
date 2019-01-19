module.exports = function(sequelize, DataTypes) {
  const Workflow = sequelize.define("workflows", { 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    flow_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    action_1: {
      type: DataTypes.STRING,
      allowNull: false
    },

    action_2_pos: {
      type: DataTypes.STRING,
      allowNull: false
    },

    action_2_pos_days: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    action_2_neg: {
      type: DataTypes.STRING,
      allowNull: false
    },

    action_2_neg_days: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    action_2_none: {
      type: DataTypes.STRING,
      allowNull: false
    },

    action_2_none_days: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  });
  return Workflow;
};