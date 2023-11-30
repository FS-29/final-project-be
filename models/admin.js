"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(models.Users, {
      //   foreignKey: "id_user",
      // });
    }
  }
  Admins.init(
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
      modelName: "Admins",
      timestamps: false
    }
  );
  return Admins;
};
