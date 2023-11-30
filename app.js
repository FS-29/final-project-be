const express = require("express");
const app = express();

const all_routes = require("./routes/");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 3000;

app.use(express.json());
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
