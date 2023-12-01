"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Laporans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(models.Users);
      // this.belongsTo(models.Tingkatans);
      // this.belongsTo(models.Status);
      this.hasOne(models.Antrians, {
        foreignKey: "id_laporan",
      });
    }
  }
  Laporans.init(
    {
      id_pelapor: {
        type: DataTypes.INTEGER,
        references: {
          models: "pelapors",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_tingkatan: {
        type: DataTypes.INTEGER,
        references: {
          models: "tingkatans",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_status: {
        type: DataTypes.INTEGER,
        references: {
          models: "status",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      nama: DataTypes.STRING,
      no_tlp: DataTypes.STRING,
      sekolah: DataTypes.STRING,
      prov: DataTypes.STRING,
      kab_kota: DataTypes.STRING,
      kec: DataTypes.STRING,
      deskripsi: DataTypes.TEXT,
      kejadian: DataTypes.DATE,
      foto: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Laporans",
    }
  );
  return Laporans;
};
