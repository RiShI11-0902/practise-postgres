const sequelize  = require("../dbConfig/dbConfig");
const { DataTypes } = require("sequelize");

const Transaction = sequelize.define(
  "Transaction",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    course_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "transactions", // Match the existing Supabase table
    timestamps: false, // If your table doesn’t have createdAt/updatedAt columns
  }
);

module.exports = Transaction