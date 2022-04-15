const { DataTypes } = require('sequelize');

const {nanoid} = require('nanoid')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Order', {
    id: {
        type: DataTypes.STRING,
        default: nanoid(),
        primaryKey: true,
        
    },
      
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending',
        validate: {
            isIn: [['pending', 'cancelled', 'finished']]
        }
    },
        
  });
};
