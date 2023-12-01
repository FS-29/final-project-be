'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tingkatans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Laporans,{
        foreignKey:"id_tingkatan"
      })
    }
  }
  Tingkatans.init({
    tingkat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tingkatans',
    timestamps:false
  });
  return Tingkatans;
};