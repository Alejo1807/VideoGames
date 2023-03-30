 const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogames', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, //crea clave de 36 caracteres de manera automática para que sean distintos a los de la API
      primaryKey: true
    },

    description: {
      type: DataTypes.STRING,
    },

    platforms: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    background_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    released: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }

  });
};
