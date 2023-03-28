//Cargarmos las librerías necesaria del core de node.js
const http = require("http");
const url = require("url");
//Definimos variables a usar.
const hostname = "127.0.0.1";
const port = 3000;

//Creamos el objeto servidor donde pasamos los dos parámetros.

// PRIMERA FORMA SIN URL
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World\n");
// });

// SEGUNDA FORMA CON URL
const server = http.createServer((req, res) => {
  let pathName = url.parse(req.url).pathname;
  if (pathName === "/") {
    console.log(pathName);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
  } else if (pathName === "/about") {
    console.log(pathName);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("About us\n");
  } else if (pathName === "/contact") {
    console.log(pathName);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Francisco\ndiazsalerno2@outlook.es");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 page not found");
  }
});

//Activamos nuestro servidor.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
