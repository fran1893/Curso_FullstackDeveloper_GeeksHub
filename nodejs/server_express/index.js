const express = require("express");
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());

app.get("/", (req, res) => res.send("Hola mundo!"));
app.get("/about", (req, res) => res.send("About us"));
app.get("/contact", (req, res) => res.send("Contact Info"));

// Parametros request en la ruta EJ: http://127.0.0.1:3000/request/user/Walter
app.get("/request/user/:name", (req, res) => {
  console.log(req.params);

  const { name } = req.params;

  res.send(`My name is : ${name}`);
});

// Parametros query request EJ: http://localhost:3000/request/country?country=Japan&city=Tokio
app.get("/request/country", (req, res) => {
  console.log(req.query);

  const { country, city } = req.query;

  res.send(`The country is :  ${country}, and the city es ${city}`);
});

// Parámetros Request por el Body
// Para este caso necesitamos enviar la información por PostMan, para ver el resultado.
// Tenemos que enviar por POST
// A la URL http://localhost:3000/request/food
// En el Body seleccionamos Raw , JSON
// { "food" : "Pizza"}
app.post("/request/food", (req, res) => {
  const { food } = req.body;
  res.send(`My Favourite food is ${food}`);
});

// Podemos obtener parámetros por Post y Get a la vez.
app.post("/request/order/:id", (req, res) => {
  res.send("Order ID " + req.params.id + " Products " + req.body.product);
});


app.listen(PORT, () => console.log(`Servidor levantado en ${PORT}`));
