module.exports = function(sequelize, DataTypes) {
  const leads = sequelize.define("leads", { 
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

  leads.associate = function (models) {
    models.leads.belongsTo(models.users);
  };

  leads.associate = function (models) {
    models.leads.belongsTo(models.workflows);
  };

  leads.associate = function (models) {
    models.leads.belongsTo(models.companies, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return leads;
};