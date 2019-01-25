module.exports = function(sequelize, DataTypes) {
  const Company = sequelize.define("Company", {
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

  Company.associate = function(models) {
    models.Company.hasMany(models.Lead);
  };

  Company.associate = function(models) {
    models.Company.hasMany(models.User);
  };

  Company.associate = function(models) {
    models.Company.hasMany(models.Workflow);
  };

  return Company;
};