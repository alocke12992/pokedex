'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pokemon = sequelize.define('Pokemon', {
    dex: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    hp: DataTypes.INTEGER
  }, {});
  Pokemon.associate = function(models) {
    // associations can be defined here
  };
  return Pokemon;
};