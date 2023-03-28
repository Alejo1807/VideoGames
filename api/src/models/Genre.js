const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Genres', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }

  }, {
    timestamps: false //Retiro los timestamps por default
  });
};
