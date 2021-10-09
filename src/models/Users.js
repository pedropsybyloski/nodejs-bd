const {Model, DataTypes} = require('sequelize');
const sequelize = require('../servers/server_my_sql');

class User extends Model{}


/*const User = sequelize.define('user', {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultType: 18
    },
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    tableName: 'users',
    timestamps: false
});*/

User.init({
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultType: 18
    },
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    tableName: 'users',
    timestamps: false
});

console.log(User === sequelize.models.User);

module.exports = User;