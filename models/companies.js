module.exports = function(sequelize, DataTypes) {
  const Company = sequelize.define("companies", {
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
  return Company;
};