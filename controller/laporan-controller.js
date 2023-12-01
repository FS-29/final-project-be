const {
  Pelapors,
  Laporans,
  Status,
  Tingkatans,
  Antrians,
} = require("../models");

module.exports = {
  getUserLaporan: async (req, res) => {
    if (req.payload.role != 1) {
      res.status(401).send("bukan squad");
      return;
    }
    const userId = req.payload.id;
    try {
      const { dataValues } = await Pelapors.findOne({
        where: { id_user: userId },
        include: [
          {
            model: Laporans,
            attributes: { exclude: ["id_pelapor"] },
          },
        ],
      });
      res.status(200).json({
        message: "data Laporan",
        data: dataValues.Laporans,
      });
    } catch (error) {
      res.status(500).send("internal Server error" + error);
    }
  },
  getAllLaporan: async (req, res) => {
    if (req.payload.role != 3) {
      res.status(401).send("bukan admin");
      return;
    }
    try {
      const listLaporan = await Laporans.findAll({});
      res.status(200).json({
        message: "data Laporan",
        data: listLaporan,
      });
    } catch (error) {
      res.status(500).send("internal Server error" + error);
    }
  },
  getLaporanById: async (req, res) => {},
  addLaporan: async (req, res) => {
    if (req.payload.role != 1) {
      res.status(401).send("bukan squad");
      return;
    }
    const dataLaporan = req.body;
    if (!dataLaporan) {
      res.status(400).send("data Laporan Kosong");
      return;
    }
    const userId = req.payload.id;
    const pelaporId = await Pelapors.findOne({
      attributes: ["id"],
      where: { id_user: userId },
    });
    // console.log(pelaporId);
    const tingkatan = dataLaporan.tingkatan;
    const tingkatanId = await Tingkatans.findOne({
      attributes: ["id"],
      where: { tingkat: tingkatan },
    });
    try {
      await Laporans.create({
        id_pelapor: pelaporId.dataValues.id,
        id_tingkatan: tingkatanId.dataValues.id,
        id_status: 1,
        nama: dataLaporan.nama,
        no_tlp: dataLaporan.noTlp,
        sekolah: dataLaporan.sekolah,
        prov: dataLaporan.prov,
        kab_kota: dataLaporan.kabKota,
        kec: dataLaporan.kec,
        deskripsi: dataLaporan.deskripsi,
        kejadian: dataLaporan.tglKejadian,
        foto: dataLaporan.bukti,
      });
      res.status(201).json({
        message: "berhasil mendambahkan laporan",
      });
    } catch (error) {
      res.status(500).send("internal server error" + error);
    }
  },
  editLaporan: async (req, res) => {},
};
