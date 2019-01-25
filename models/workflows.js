module.exports = function(sequelize, DataTypes) {
  const Workflow = sequelize.define("Workflow", { 
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
    },

    action2Neg: {
      type: DataTypes.STRING,
      allowNull: false
    },

    action2NegDays: {
      type: DataTypes.INTEGER,
    },

    action2None: {
      type: DataTypes.STRING,
      allowNull: false
    },

    action2NoneDays: {
      type: DataTypes.INTEGER,
    }

  });

  Workflow.associate = function(models) {
    models.Workflow.belongsTo(models.Company);
  };

  Workflow.associate = function(models) {
    models.Workflow.hasMany(models.Lead);
  };

  return Workflow;
};