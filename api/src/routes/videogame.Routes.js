const { Router } = require("express");

const getVideogamesHandler = require("../handlers/getVideogamesHandler")

const videogameRouter = Router();

// videogameRouter.get("/", (req, res) => {
//   res.status(200).send("Ruta para obtener todos los videogame de la api y bdd");
// });

videogameRouter.get("/", getVideogamesHandler);

videogameRouter.get("/name?", (req, res) => {
  res.status(200).send("Ruta para obtener un videogame por NOMBRE");
});

videogameRouter.get("/:idVideogame", (req, res) => {
  res.status(200).send("Ruta para obtener un el detalle de un videojuego por ID");
});

videogameRouter.post("/", (req, res) => {
  res.status(200).send("Ruta para CREAR un videogame");
});

module.exports = videogameRouter;
