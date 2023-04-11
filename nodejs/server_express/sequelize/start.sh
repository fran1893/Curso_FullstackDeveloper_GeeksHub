# crear base de datos
sequelize db:create

# crear modelo
sequelize model:generate --name Alumno --attributes 'nombre:string,apellidos:string,edad:integer,fecha_nacimiento:date,activo:enum:{si,no},id_nacionalidad:integer'


# ejecutar migración
sequelize db:migrate


# deshacer la migración
sequelize db:migrate:undo

# deshacer una migración especifica
sequelize db:migrate:undo --to 20230331105148-create-alumno.js

# crear la seed para llenar la tabla alumnos
sequelize seed:generate --name alumno

# usar la seed
sequelize db:seed --seed 20230331111132-alumno.js

# usar todas los seed
sequelize db:seed:all

# deshacer la seed
sequelize db:seed:undo
