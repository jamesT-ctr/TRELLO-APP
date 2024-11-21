const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Importa la conexión de base de datos

// Definir el modelo de Usuario
const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nameUser: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    passwordUser: {
        type: DataTypes.STRING,
        allowNull: false
    },
    }, {
    tableName: 'users',  // Nombre de la tabla en la base de datos
    timestamps: false        // Si no tienes createdAt y updatedAt en tu tabla
});

module.exports = User;