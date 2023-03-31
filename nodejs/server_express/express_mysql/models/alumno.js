const db = require("../db/db");

const Alumno = {};

Alumno.LIMIT = 2;

Alumno.fetchAll = (page = 1) => {
  return new Promise((resolve, reject) => {
    if (!db) reject(new Error("Can't connect to database"));

    const { LIMIT } = Alumno;
    const offset = (page - 1) * LIMIT;
    const SQL = `SELECT * FROM alumnos LIMIT ${LIMIT} OFFSET ${offset}`;

    db.query(SQL, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

Alumno.getCount = () => {
  return new Promise((resolve, reject) => {
    if (!db) reject(new Error("Can't connect to database"));

    const SQL = `SELECT COUNT(id) as count FROM alumnos`;

    db.query(SQL, (err, rows) => {
      if (err) reject(err);
      else resolve(rows[0].count);
    });
  });
};

module.exports = Alumno;
