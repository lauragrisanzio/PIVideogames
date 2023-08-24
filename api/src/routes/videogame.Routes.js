const { Router } = require("express");

const getVideogamesHandler = require("../handlers/getVideogamesHandler")
const getVideoGByIdHandler = require("../handlers/getVideoGByIdHandler.js")
const getVideoGCreatedHandler = require("../handlers/getVideoGCreatedHandler")
const postVideogameHandler = require("../handlers/postVideogameHandler")
const putVideogameHandler = require("../handlers/putVideogameHandler")
// const getVideogameByNameHandler = require("../handlers/getVideogamesHandler");

const videogameRouter = Router();

videogameRouter.get("/", getVideogamesHandler);
videogameRouter.get("/created", getVideoGCreatedHandler);
// videogameRouter.get("/name", getVideogameByNameHandler);//el query es un adicional de la ruta get
//la ruta es la misma igual que el mismo handler...
videogameRouter.get("/:idVideogame", getVideoGByIdHandler);
videogameRouter.post("/", postVideogameHandler);
videogameRouter.put("/:id", putVideogameHandler);

module.exports = videogameRouter;