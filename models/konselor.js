'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Konselors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Konselors.init({
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Konselors',
    timestamps:false
  });
  return Konselors;
};