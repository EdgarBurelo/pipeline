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

    assignedTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
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

  //Each lead is the property of one company/usergroup
  leads.associate = function (models) {
    models.leads.belongsTo(models.companies, {
      foreignKey: {
        allowNull: false
      }
    }
    );
  };

  //Each lead can be assigned to an agent
  leads.associate = function (models) {
    models.leads.belongsTo(models.users);
  };

  //Each lead can be assigned to a workflow (if it's not, no one will contact them)
  leads.associate = function (models) {
    models.leads.belongsTo(models.workflows);
  };

  return leads;
};