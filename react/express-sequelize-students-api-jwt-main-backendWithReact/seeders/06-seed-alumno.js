"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "alumnos",
         [
            {
               activo: "si",
               id_nacionalidad: 1,
               id_direccion: 1,
               id_user: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               activo: "si",
               id_nacionalidad: 3,
               id_direccion: 2,
               id_user: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               activo: "si",
               id_nacionalidad: 2,
               id_direccion: 3,
               id_user: 4,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               activo: "si",
               id_nacionalidad: 4,
               id_direccion: 4,
               id_user: 5,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               activo: "no",
               id_nacionalidad: 6,
               id_direccion: 5,
               id_user: 6,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               activo: "no",
               id_nacionalidad: 4,
               id_direccion: 1,
               id_user: 7,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               activo: "si",
               id_nacionalidad: 4,
               id_direccion: 2,
               id_user: 8,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               activo: "si",
               id_nacionalidad: 3,
               id_direccion: 3,
               id_user: 9,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               activo: "no",
               id_nacionalidad: 6,
               id_direccion: 4,
               id_user: 10,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("alumnos", {
         [Op.or]: [
            { nombre: "Jose" },
            { nombre: "Marta" },
            { nombre: "Ernesto" },
            { nombre: "Vicente" },
            { nombre: "Enrrique" },
            { nombre: "Terry" },
            { nombre: "Sheldon" },
            { nombre: "Terrill" },
            { nombre: "Miles" },
            { nombre: "Mavis" },
            { nombre: "Alison" },
            { nombre: "Oleta" },
            { nombre: "Ewell" },
         ],
      });
   },
};
