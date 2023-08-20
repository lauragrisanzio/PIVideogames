const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define("Genres", {
    id: {
      type: DataTypes.INTEGER,
      autoincrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
      timestamps: false,
    });
};
