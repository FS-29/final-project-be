const express = require("express");
const app = express();
const upload = require("express-fileupload")
const cors = require('cors')

const all_routes = require("./routes/");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(upload())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(all_routes);

async function checkConnect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
checkConnect()

app.listen(PORT, () => {
  console.log("Server running at PORT: " + PORT);
});
