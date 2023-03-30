const mysql = require("mysql2");
const config = require("../config/config.json");

// Crear la conexión con la base de datos
const db = mysql.createConnection({
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database,
});

// abrir la conexión
db.connect((error) => {
  if (error) throw error;

  console.log(`Connected to ${config.database} database`);
});

module.exports = db;
