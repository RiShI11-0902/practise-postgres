const { Sequelize } = require("sequelize");
const pg = require("pg");
require("dotenv").config();

console.log(process.env.DB_URL);

const sequelize = new Sequelize(process.env.DB_URL, {
  dialectModule: pg,
  dialect: "postgres",
  logging: false,
})

async function connectDB(){  // ✅ Call the async function immediately
  try {
    await sequelize.authenticate();
    console.log(" DB Connected Successfully!");

    await sequelize.sync({ alter: true });
    console.log("Ready to operate");
  } catch (error) {
    console.error(" DB Connection Error:", error.message);
  }
};

connectDB()

module.exports = sequelize;
