const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Category', {
        
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
};