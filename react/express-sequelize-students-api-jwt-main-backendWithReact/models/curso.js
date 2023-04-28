"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Curso extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here

         // Curso {0..n}--{1} Categoria */
         Curso.belongsTo(models.Categoria, {
            as: "categoria",
            foreignKey: "id_categoria", // foreignKey de Curso
         });

         // Curso {1..n}--{0..n} Alumno
         Curso.belongsToMany(models.Alumno, {
            as: "alumnos",
            through: "cursos_alumnos", // a traves de
            foreignKey: "id_curso", // foreingKey en cursos_alumnos
         });
      }
   }
   Curso.init(
      {
         nombre_curso: DataTypes.STRING,
         id_categoria: DataTypes.INTEGER,
      },
      {
         sequelize,
         modelName: "Curso",
         tableName: "cursos",
      }
   );
   return Curso;
};
