const { DataTypes, DOUBLE } = require("sequelize");
const sequelize = require("../connection/connection");

const Usuario = sequelize.define('Usuario', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    balance: {
        type: DataTypes.FLOAT
    }
}, {
    tableName: 'usuarios',
    timestamps: false
});

module.exports = Usuario;