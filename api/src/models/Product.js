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
      allowNull: true
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
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    discount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    warranty: {
      type: DataTypes.TEXT,
      allowNull: true
    }, 
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    suitable_for: {
      type: DataTypes.STRING,
      allowNull: true
    },
    composition: {
      type: DataTypes.STRING,
      allowNull: true
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    important_data: {
      type: DataTypes.STRING,
      allowNull: true
    },
    extras: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: { // pienso que deberíamos colocar una imagen por defecto por si acaso...
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: 'https://pixabay.com/es/vectors/camiseta-de-manga-corta-camisa-cima-34481'
    },
    
  });
};
