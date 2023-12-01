'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Laporans', [
      {
        id_pelapor: 1,
        id_tingkatan: 2,
        id_status: 1,
        nama: "tegar",
        no_tlp: "093579709515",
        sekolah: "aijbvqijvw",
        prov: "jibqivw",
        kab_kota: "vowjbeivjwe",
        kec: "ivwbeijwev",
        deskripsi: "jvbweijvbiwejv",
        kejadian: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
       }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Laporans', null, {});
  }
};
