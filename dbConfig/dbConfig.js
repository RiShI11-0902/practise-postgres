const { Sequelize } = require("sequelize");
const pg = require("pg");
require('dotenv').config()
const sequelize = new Sequelize(process.env.DB_URL, {
  dialectModule: pg,
  dialect: "postgres",
  logging: false,
})(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connected");

    await sequelize.sync({ alter: true });
    console.log("Ready to operate");
  } catch (error) {
    console.log("Db Error", error.message);
  }
});


module.exports = sequelize