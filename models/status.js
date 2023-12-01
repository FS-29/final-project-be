"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Laporans, {
        foreignKey: "id_status",
      });
    }
  }
  Status.init(
    {
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Status",
      timestamps:false
    }
  );
  return Status;
};
