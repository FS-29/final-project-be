"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Admins, {
        foreignKey: "id_user",
      });
      this.hasOne(models.Pelapors, {
        foreignKey: "id_user",
      });
      this.hasOne(models.Konselors, {
        foreignKey: "id_user",
      });
      this.hasOne(models.Profils, {
        foreignKey: "id_user",
      });
    }
  }
  Users.init(
    {
      email: { type: DataTypes.STRING, allowNull: false },
      pass: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
