'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Laporans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pelapor: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_tingkatan: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_status: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      nama: {
        allowNull: false,
        type: Sequelize.STRING
      },
      no_tlp: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sekolah: {
        allowNull: false,
        type: Sequelize.STRING
      },
      prov: {
        allowNull: false,
        type: Sequelize.STRING
      },
      kab_kota: {
        allowNull: false,
        type: Sequelize.STRING
      },
      kec: {
        allowNull: false,
        type: Sequelize.STRING
      },
      deskripsi: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      kejadian: {
        allowNull: false,
        type: Sequelize.DATE
      },
      foto: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Laporans');
  }
};