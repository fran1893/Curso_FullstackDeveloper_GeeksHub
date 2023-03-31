"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Alumnos", [
      {
        nombre: "Jose",
        apellidos: "Palacios",
        edad: 24,
        fecha_nacimiento: '1990-01-01',
        activo: 'si',
        id_nacionalidad: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Marta",
        apellidos: "García",
        edad: 18,
        fecha_nacimiento: '1990-01-01',
        activo: 'si',
        id_nacionalidad: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Ernesto",
        apellidos: "Peréz",
        edad: 54,
        fecha_nacimiento: '1990-01-01',
        activo: 'si',
        id_nacionalidad: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Vicente",
        apellidos: "Ruiz",
        edad: 33,
        fecha_nacimiento: '1990-01-01',
        activo: 'si',
        id_nacionalidad: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Enrique",
        apellidos: "Cervantes",
        edad: 46,
        fecha_nacimiento: '1990-01-01',
        activo: 'si',
        id_nacionalidad: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Alumnos', null, {});
  },
};
