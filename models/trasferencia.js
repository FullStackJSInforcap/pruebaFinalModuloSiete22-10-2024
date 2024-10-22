const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");
const Usuario = require("./usuario");

const Transferencia = sequelize.define('Transferencia', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    receptor: {
        type: DataTypes.INTEGER
    },
    emisor: {
        type: DataTypes.INTEGER
    },
    monto: {
        type: DataTypes.FLOAT
    },
    fecha: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'transferencias',
    timestamps: false
});

Transferencia.belongsTo(Usuario, {
    as: 'receptorAlias',
    foreignKey: {
        name: 'receptor'
    }
});
Transferencia.belongsTo(Usuario, {
    as: 'emisorAlias',
    foreignKey: {
        name: 'emisor'
    }
});


module.exports = Transferencia;