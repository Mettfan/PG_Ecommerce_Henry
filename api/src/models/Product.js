const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Product', {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true // el producto debería tener un nombre único me parece mejor
    },
    description: {

      type: DataTypes.TEXT,

    },
    size: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      //type: DataTypes.ARRAY,
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stock_by_size: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    discount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    warranty: {
      type: DataTypes.STRING,
    }, 
    brand: {
      type: DataTypes.STRING,
    },
    suitable_for: {
      type: DataTypes.STRING,
    },
    composition: {
      type: DataTypes.STRING,
    },
    origin: {
      type: DataTypes.STRING,
    },
    important_data: {
      type: DataTypes.STRING,
    },
    extras: {
      type: DataTypes.STRING,

    },

    image: { // pienso que deberíamos colocar una imagen por defecto por si acaso...
      type: DataTypes.TEXT,
      defaultValue: 'https://pixabay.com/es/vectors/camiseta-de-manga-corta-camisa-cima-34481'

    },
    disabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false

    }
  });
};