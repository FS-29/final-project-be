"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pelapors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Alamats, {
        foreignKey: "id_pelapor",
      });
      this.hasOne(models.Sekolahs, {
        foreignKey: "id_pelapor",
      });
      this.hasMany(models.Laporans, {
        foreignKey: "id_pelapor",
      });
    }
  }
  Pelapors.init(
    {
      id_user: {
        type: DataTypes.INTEGER,
        references: {
          models: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    },
    {
      sequelize,
      modelName: "Pelapors",
      timestamps: false,
    }
  );
  return Pelapors;
};
