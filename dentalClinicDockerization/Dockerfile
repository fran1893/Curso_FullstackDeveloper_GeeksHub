# Imagen base del sistema operativo
FROM node

# Directorio de trabajo de la aplicación
WORKDIR /usr/src/app

# Con la sentencia de abajo copia todo
COPY . .

RUN npm install
RUN sequelize db:create
RUN npm run db-reset

CMD ["npm", "run", "dev"]