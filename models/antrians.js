"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Antrians extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Konselors);
    }
  }
  Antrians.init(
    {
      id_konselor: {
        type: DataTypes.INTEGER,
        references: {
          models: "konselors",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_laporan: {
        type: DataTypes.INTEGER,
        references: {
          models: "laporans",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Antrians",
      timestamps: false,
    }
  );
  return Antrians;
};
