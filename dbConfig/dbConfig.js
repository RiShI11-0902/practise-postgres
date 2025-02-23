const { Sequelize } = require("sequelize");
const pg = require("pg");

const sequelize = new Sequelize("postgresql://postgres: _tGTdZfS!MHP9m6@db.tnvibvsasyhesrpqynru.supabase.co:5432/postgres", {
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