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
      this.hasMany(models.Pendidikans,{
        foreignKey:"id_konselor"
      })
      this.hasMany(models.Antrians,{
        foreignKey:"id_konselor"
      })
    }
  }
  Konselors.init({
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        models: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    }
  }, {
    sequelize,
    modelName: 'Konselors',
    timestamps:false
  });
  return Konselors;
};