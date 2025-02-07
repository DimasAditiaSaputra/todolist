import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: 10, // Batasi jumlah koneksi dalam pool (opsional)
});

export default db;
