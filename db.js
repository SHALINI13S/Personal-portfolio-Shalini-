const mysql = require("mysql2/promise");
require("dotenv").config();

// Connection pool - never hard-code credentials, always read from environment
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "portfolio_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Simple helper to verify the DB connection on server start
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("MySQL connected successfully.");
    connection.release();
    return true;
  } catch (err) {
    console.error("MySQL connection failed:", err.message);
    return false;
  }
}

module.exports = { pool, testConnection };
