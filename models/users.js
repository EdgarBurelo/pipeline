module.exports = (sequelize, DataTypes) => {

  const users = sequelize.define("users", {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 50],
          msg: 'The name is too long'
        }
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },

    profile: {
      type: DataTypes.STRING,
      allowNull: false,

    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //     isAlphanumeric: true
      // }
    }
  });

  users.associate = function(models) {
    models.users.belongsTo(models.companies, {
      foreignKey: {
        allowNull: false
      }
    });
  };

 
  return users;
};