const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Product', {
    //creo que aquí faltó el id..  sino me disculpan que meta mano ="(
    id: {
      type: DataTypes.UUID,
      defaultValue: Datatypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true // el producto debería tener un nombre único me parece mejor
    },
    size: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    colors: {
      //type: DataTypes.ARRAY,
      type: DataTypes.ARRAY(DataTypes.INTENGER),
      //no estoy seguro pero creo que así se usa el datatypes array les paso el link
      // https://sequelize.org/v5/manual/data-types.html#:~:text=Sequelize.ARRAY(Sequelize.TEXT)%20%20%20%20%20%20%20//%20Defines%20an%20array.%20PostgreSQL%20only.%0ASequelize.ARRAY(Sequelize.ENUM)%20%20%20%20%20%20%20//%20Defines%20an%20array%20of%20ENUM.%20PostgreSQL%20only.
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    image: { // pienso que deberíamos colocar una imagen por defecto por si acaso...
      type: DataTypes.STRING,
      allowNull: false,
      //defaultValue: 'https://pixabay.com/es/vectors/camiseta-de-manga-corta-camisa-cima-34481'
    }
  });
};
