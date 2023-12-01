const { Pelapors, Alamats, Sekolahs } = require("../models");

module.exports = {
  getAlamat: async (req, res) => {
    if (req.payload.role != 1) {
      res.status(401).send("bukan squad");
      return;
    }
    const userId = req.payload.id;
    try {
      const { dataValues } = await Pelapors.findOne({
        attributes: ["id"],
        where: { id_user: userId },
        include: [
          {
            model: Alamats,
            attributes: { exclude: ["id", "id_pelapor"] },
          },
        ],
      });
      // console.log(dataValues.Alamat.dataValues);
      res.status(200).json({
        message: "data alamat",
        data: dataValues.Alamat.dataValues,
      });
    } catch (error) {
      res.status(500).send('internal Server error')
    }
    
  },
  getSekolah: async (req, res) => {
    if (req.payload.role != 1) {
      res.status(401).send("bukan squad");
      return;
    }
    const userId = req.payload.id;
    try {
      const { dataValues } = await Pelapors.findOne({
        attributes: ["id"],
        where: { id_user: userId },
        include: [
          {
            model: Sekolahs,
            attributes: { exclude: ["id", "id_pelapor"] },
          },
        ],
      });
      // console.log(dataValues.Sekolah.dataValues);
      res.status(200).json({
        message: "data sekolah",
        data: dataValues.Sekolah.dataValues,
      }); 
    } catch (error) {
      res.status(500).send('internal Server error')
    }
  },
  addAlamat: async (req, res) => {
    if (req.payload.role != 1) {
      res.status(401).send("bukan squad");
      return;
    }
  },
  addSekolah: async (req, res) => {
    if (req.payload.role != 1) {
      res.status(401).send("bukan squad");
      return;
    }
    const dataSekolah = req.body;
    if (!dataSekolah) {
      res.status(400).send("data Sekolah Kosong");
      return;
    }
    const userId = req.payload.id;
    const { dataValues } = await Pelapors.findOne({
      attributes: ["id"],
      where: { id_user: userId },
    });
    // console.log(dataValues.id);
    try {
      await Sekolahs.create({
        id_pelapor: dataValues.id,
        nama: dataSekolah.nama,
        ponsel: dataSekolah.ponsel,
        email: dataSekolah.email,
        prov: dataSekolah.prov,
        kab_kota: dataSekolah.kab_kota,
        kec: dataSekolah.kec,
        desa: dataSekolah.desa,
        kode_pos: dataSekolah.kode_pos,
        alamat: dataSekolah.alamat,
      });
      res.status(201).json({
        message: "berhasil menambahkan data sekolah",
      });
    } catch (error) {
      res.status(500).send("internal server error");
    }
  },
  editAlamat: async (req, res) => {
    if (req.payload.role != 1) {
      res.status(401).send("bukan squad");
      return;
    }
  },
  editSekolah: async (req, res) => {
    if (req.payload.role != 1) {
      res.status(401).send("bukan squad");
      return;
    }
  },
};
