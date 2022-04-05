const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Favorite', {
        
        fav_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } 

    });
}