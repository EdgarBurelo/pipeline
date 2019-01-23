const bcrypt = require("bcrypt");
module.exports =  (sequelize, DataTypes) => {
    
    const User = sequelize.define("users",{
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
    },{
        classMethods: {
            generateHash: password => {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
            }
        },
        instanceMethods: {
            validPassword: (password) => {
                return bcrypt.compareSync(password, this.password);
            }
        }
    });
    return User;
}