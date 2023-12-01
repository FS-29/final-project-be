'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pendidikans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Konselors)
    }
  }
  Pendidikans.init({
    id_konselor: {
      type: DataTypes.INTEGER,
      references: {
        models: "konselors",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    instansi: DataTypes.STRING,
    gelar: DataTypes.STRING,
    topik: DataTypes.STRING,
    graduate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Pendidikans',
    timestamps:false
  });
  return Pendidikans;
};