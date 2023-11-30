const bscrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Users, Admins, Profils, Pelapors, Konselors } = require("../models");

module.exports = {
  loginUser: async (req, res) => {
    let dataUser = req.body;
    let role = 0;
    const user = await Users.findOne({
      where: { email: dataUser.email },
    });
    if (user == null) {
      res.status(400).send("belum regis");
      return;
    }
    const pelapor = await Pelapors.findOne({
        attribute: ["id"],
        where: { id_user: user.id },
    });
    const konselor = await Konselors.findOne({
        attribute: ["id"],
        where: { id_user: user.id },
    });
    const admin = await Admins.findOne({
        attribute: ["id"],
        where: { id_user: user.id },
    });
    if (pelapor!=null) {
        role=1
    }else if (konselor!=null) {
        role=2
    }else if (admin!=null) {
        role=3
    }

    if ((bscrypt, bscrypt.compareSync(dataUser.pass, user.dataValues.pass))) {
      const token = jwt.sign({ 
        email: user.email,
        role: role
     }, process.env.JWT_KEY);
      res.status(200).json({
        message: "berhasil login",
        token: token,
      });
      return;
    }
    res.status(401).send("incorect password");
  },

  registerUser: async (req, res) => {
    let dataUser = req.body;
    const role = req.headers.role;
    if (JSON.stringify(dataUser) === "{}") {
      res.status(400).send("data kosong");
      return;
    }
    const emailV = await Users.findOne({ where: { email: dataUser.email } });
    console.log(emailV);
    if (emailV) {
      res.status(409).send("email sudah terdaftar");
      return;
    }
    try {
      const hashPwd = bscrypt.hashSync(dataUser.pass, 10);
      await Users.create({
        email: dataUser.email,
        pass: hashPwd,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      const idUser = await Users.findOne({
        attribute: ["id"],
        where: { email: dataUser.email },
      });
      await Profils.create({
        id_user: idUser.dataValues.id,
        username: dataUser.username,
        nama: dataUser.nama,
      });
      if (role == 1) {
        await Pelapors.create({
          id_user: idUser.dataValues.id,
        });
        res.status(201).send("berhasil register Pelapor");
      } else if (role == 2) {
        await Konselors.create({
          id_user: idUser.dataValues.id,
        });
        res.status(201).send("berhasil register Konselor");
      } else if (role == 3) {
        await Admins.create({
          id_user: idUser.dataValues.id,
        });
        res.status(201).send("berhasil register Admin");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("internal server error");
    }
  },
};
// const test = await Users.findOne({
//     include: Admins,
//     where:{email:dataUser.email}
// })
// const test = await Users.findOne({
//     attributes: ['id'],
//     where:{email:dataUser.email}
// })
// console.log(test.dataValues.id);
// res.status(200).json({
//     message:"berhasil mendapatkan data todos dari user",
//     data:test
// })
