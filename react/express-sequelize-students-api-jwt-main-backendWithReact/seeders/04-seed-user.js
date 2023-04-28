const bcrypt = require("bcrypt");
const { hash } = require("../_util/hash");

const password = "12345678";
const encryptedPassword = hash(password, 10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "users",
         [
            {
               nombre: "Admon",
               apellidos: "Json",
               fecha_nacimiento: "1996-05-01",
               email: "admin@admin.com",
               password: encryptedPassword,
               id_role: 1, // admin
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               nombre: "Jose",
               apellidos: "Palacios",
               fecha_nacimiento: "1996-05-01",
               email: "jose@palacios.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               nombre: "Marta",
               apellidos: "García",
               fecha_nacimiento: "2002-09-10",
               email: "marta@garcia.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               nombre: "Ernesto",
               apellidos: "Pérez",
               fecha_nacimiento: "1966-07-23",
               email: "ernest@perez.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               nombre: "Vicente",
               apellidos: "Ruiz",
               fecha_nacimiento: "1987-12-31",
               email: "vicente@ruiz.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               nombre: "Enrrique",
               apellidos: "Cervantes",
               fecha_nacimiento: "1974-01-15",
               email: "laura@laura.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               nombre: "Terry",
               apellidos: "Medhurst",
               fecha_nacimiento: "2000-12-25",
               email: "terry@medhusrst.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               nombre: "Sheldon",
               apellidos: "Quigley",
               fecha_nacimiento: "2003-08-02",
               email: "sheldon@quigley.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               nombre: "Terrill",
               apellidos: "Hills",
               fecha_nacimiento: "1992-12-30",
               email: "terrill@hills.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               nombre: "Miles",
               apellidos: "Cummerata",
               fecha_nacimiento: "1969-01-16",
               email: "miles@cummerata.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
         ],
         {}
      );
   },
   async down(queryInterface, Sequelize) {
      /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
   },
};
