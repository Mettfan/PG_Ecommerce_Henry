const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        lastName: {
            type: DataTypes.STRING,
        },

        picture: {
            type: DataTypes.STRING,
        },

        gender: {
            type: DataTypes.STRING,
        },

       /*  born: {
            type: DataTypes.DATE,
            allowNull: false,
        }, */

        dni: {
            type: DataTypes.STRING,
            unique: true,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        /* address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false
        }, */
        phone: {
            type: DataTypes.STRING,
        },

        password: {
            type: DataTypes.STRING,
        },

        permission: {
            type: DataTypes.STRING,
            defaultValue: 'user'
        }
    });
};
