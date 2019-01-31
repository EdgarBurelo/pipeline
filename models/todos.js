module.exports = function(sequelize, DataTypes) {
    const todos = sequelize.define("todos", { 
      
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
  
      task: {
        type: DataTypes.STRING,
        allowNull: false
      },
  
      status: {
        type: DataTypes.STRING,
        allowNull: false
      }
  
    });
  
    return todos;
  };