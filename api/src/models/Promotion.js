const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Promotion', {
        
        discount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

    });
}