const db = require("../db/db");

const Alumno = {};

Alumno.fetchAll = (cb, page = 1) => {
  if (!db) return cb("Can't connect to database");

  const limit = 2;
  const offset = (page - 1) * limit;

  const SQL = `SELECT * FROM alumnos LIMIT ${limit} OFFSET ${offset}`;

  db.query(SQL, (err, rows) => {
    if (err) return cb(err);
    else return cb(null, rows);
  });
};

Alumno.getStudents;

module.exports = Alumno;
