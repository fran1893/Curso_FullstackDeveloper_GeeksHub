"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Nacionalidad extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here

         // Nacionalidad {1}--{0..n} Alumno
         Nacionalidad.hasMany(models.Alumno, {
            as: "alumno",
            foreignKey: "id_nacionalidad", // foreignKey en modelo Alumno
         });
      }
   }
   Nacionalidad.init(
      {
         nombre_nacion: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: "Nacionalidad",
         tableName: "nacionalidades",
      }
   );
   return Nacionalidad;
};
