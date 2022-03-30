const { DataTypes } = require('sequelize');
import {nanoid} from 'nanoid'
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Order', {
      quantity: {
          type: DataTypes.INTEGER,
          allowNull: false 
      },

      total: {
          type: DataTypes.INTEGER,
          allowNull: false
      },

      id: {
          type: DataTypes.STRING,
          default: nanoid(),
          primaryKey: true
      }

    
  });
};