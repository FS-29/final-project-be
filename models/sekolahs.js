'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sekolahs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sekolahs.init({
    id_pelapor: {
      type: DataTypes.INTEGER,
      references: {
        models: "pelapors",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    nama: DataTypes.STRING,
    ponsel: DataTypes.STRING,
    email: DataTypes.STRING,
    prov: DataTypes.STRING,
    kab_kota: DataTypes.STRING,
    kec: DataTypes.STRING,
    desa: DataTypes.STRING,
    kode_pos: DataTypes.STRING,
    alamat: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Sekolahs',
    timestamps:false
  });
  return Sekolahs;
};