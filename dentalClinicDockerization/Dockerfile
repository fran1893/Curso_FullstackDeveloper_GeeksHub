# Imagen base del sistema operativo
FROM node

# Directorio de trabajo de la aplicación
WORKDIR /usr/src/app

# Con la sentencia de abajo copia todo
COPY . .

RUN npm install

CMD ["npm", "run", "dev"]