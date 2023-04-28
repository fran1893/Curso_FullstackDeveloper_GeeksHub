"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class User extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here

         // User {1..n}--{1} Role
         User.belongsTo(models.Role, {
            as: "role",
            foreignKey: "id_role", // foreignKey de User
         });

         // User {1}--{01} Alumno
         User.hasOne(models.Alumno, {
            as: "alumno",
            foreignKey: "id_user", // foreignKey en modelo Alumno
         });
      }
   }
   User.init(
      {
         email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
               isEmail: true,
            },
         },
         password: {
            type: DataTypes.STRING,
         },
         nombre: {
            type: DataTypes.STRING,
            validate: {
               is: /^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z]*)*$/,
            },
         },
         apellidos: {
            type: DataTypes.STRING,
            validate: {
               is: /^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z]*)*$/,
            },
         },
         fecha_nacimiento: {
            type: DataTypes.DATE,
            validate: {
               isDate: true,
               isAfter: "1900-01-01",
            },
         },

         id_role: DataTypes.INTEGER,
      },
      {
         sequelize,
         modelName: "User",
         tableName: "users",
      }
   );
   return User;
};
