module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define("User", {

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

    company: {
      type: DataTypes.STRING,
      allowNull: false
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //     isAlphanumeric: true
      // }
    }
  });

  User.associate = function(models) {
    models.User.hasMany(models.Lead);
  };

  User.associate = function(models) {
    models.User.belongsTo(models.Company);
  };
 
  return User;
};