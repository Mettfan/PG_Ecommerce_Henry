const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permission: {
        type: DataTypes.STRING,
        allowNull: false
    }

    
  });
};
