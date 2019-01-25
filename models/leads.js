module.exports = function(sequelize, DataTypes) {
  const Lead = sequelize.define("Lead", { 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    lastName: {
      type: DataTypes.STRING
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }

    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    }

  });

  Lead.associate = function (models) {
    models.Lead.belongsTo(models.User);
  };

  Lead.associate = function (models) {
    models.Lead.belongsTo(models.Workflow);
  };

  Lead.associate = function (models) {
    models.Lead.belongsTo(models.Company, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Lead;
};