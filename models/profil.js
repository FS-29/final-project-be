'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profils extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profils.init({
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        models: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    username: DataTypes.STRING,
    nama: DataTypes.STRING,
    no_tlp: DataTypes.STRING,
    picture: DataTypes.STRING,
    tmp_lahir: DataTypes.STRING,
    tgl_lahir: DataTypes.DATE,
    kelamin: DataTypes.STRING,
    agama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profils',
    timestamps: false
  });
  return Profils;
};