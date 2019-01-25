module.exports = function(sequelize, DataTypes) {
  const companies = sequelize.define("companies", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  companies.associate = function(models) {
    models.companies.hasMany(models.leads);
  };

  companies.associate = function(models) {
    models.companies.hasMany(models.users);
  };

  companies.associate = function(models) {
    models.companies.hasMany(models.workflows);
  };

  return companies;
};