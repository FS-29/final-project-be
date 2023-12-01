'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alamats', {
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
      prov: {
        type: Sequelize.STRING
      },
      kab_kota: {
        type: Sequelize.STRING
      },
      kec: {
        type: Sequelize.STRING
      },
      desa: {
        type: Sequelize.STRING
      },
      kode_pos: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.TEXT
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Alamats');
  }
};