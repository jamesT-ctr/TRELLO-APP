const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModels'); // Relación con el modelo User

const Project = sequelize.define('Project', {
id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
},
name: {
    type: DataTypes.STRING,
    allowNull: false,
},
description: {
    type: DataTypes.TEXT,
    allowNull: true,
},
user_id: {
    type: DataTypes.INTEGER,
    references: {
        model: User,
        key: 'id',
    },
},
created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
},
}, {
timestamps: false,
});

Project.sync({force: false}).then(() => {
    console.log('Proyectos creadas con éxito');
}).catch((error) => {
    console.error('Hubo un error al crear las tablas:', error);
});


module.exports = Project;