'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pendidikans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_konselor: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      instansi: {
        type: Sequelize.STRING
      },
      gelar: {
        type: Sequelize.STRING
      },
      topik: {
        type: Sequelize.STRING
      },
      graduate: {
        type: Sequelize.DATEONLY
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pendidikans');
  }
};