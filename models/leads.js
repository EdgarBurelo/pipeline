module.exports = function (sequelize, DataTypes) {
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
      type: DataTypes.STRING,
      allowNull: true
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
    },

    nextContactDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null
    },

    nextContactType: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },

    nextContactStep: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    }

  });

  leads.associate = function (models) {
    //Each lead is the property of one company/usergroup
    models.leads.belongsTo(models.companies, {
      foreignKey: {
        allowNull: false
      }
    });
    //Each lead can be assigned to an agent
    models.leads.belongsTo(models.users);
    //Each lead can be assigned to a workflow (if it's not, no one will contact them)
    models.leads.belongsTo(models.workflows);
  };


  return leads;
};