// Muestra en consola el sistema operativo
console.log(process.platform);

// Mostrar en consola el sistema operativo como variable
const { platform } = require('node:process');

console.log(`This platform is ${platform}`);
