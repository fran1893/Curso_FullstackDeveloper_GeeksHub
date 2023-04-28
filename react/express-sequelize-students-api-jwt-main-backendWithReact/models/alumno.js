"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Alumno extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here

         // Alumno {01}--{1} User
         Alumno.belongsTo(models.User, {
            as: "usuario",
            foreignKey: "id_user", // foreignKey de Alumno
         });

         // Alumno {0..n}--{1} Nacionalidad
         Alumno.belongsTo(models.Nacionalidad, {
            as: "nacionalidad",
            foreignKey: "id_nacionalidad", // foreignKey de Alumno
         });

         // Alumno {1..n}--{1} Direccion
         Alumno.belongsTo(models.Direccion, {
            as: "direccion",
            foreignKey: "id_direccion", // foreignKey de Alumno
         });

         // Alumno {1..n}--{1} Curso
         Alumno.belongsToMany(models.Curso, {
            as: "cursos",
            through: "cursos_alumnos", // a traves de
            foreignKey: "id_alumno", // foreingKey en cursos_alumnos
         });
      }
   }
   Alumno.init(
      {
         activo: DataTypes.ENUM("si", "no"),
         id_nacionalidad: DataTypes.INTEGER,
         id_direccion: DataTypes.INTEGER,
         id_user: DataTypes.INTEGER,
      },
      {
         sequelize,
         modelName: "Alumno",
         tableName: "alumnos",
      }
   );
   return Alumno;
};
