const { Router } = require("express");

const getVideogamesHandler = require("../handlers/getVideogamesHandler")
const getVideoGByIdHandler = require("../handlers/getVideoGByIdHandler.js")
const getVideoGCreatedHandler = require("../handlers/getVideoGCreatedHandler")
const postVideogameHandler = require("../handlers/postVideogameHandler")
// const getVideogameByNameHandler = require("../handlers/getVideogamesHandler");

const videogameRouter = Router();

videogameRouter.get("/", getVideogamesHandler);
videogameRouter.get("/creat", getVideoGCreatedHandler);
// videogameRouter.get("/name", getVideogameByNameHandler);//el query es un adicional de la ruta get
//la ruta es la misma igual que el mismo handler...

videogameRouter.get("/:idVideogame", getVideoGByIdHandler);
// videogameRouter.get("/created", getVideoGCreatedHandler);

videogameRouter.post("/", postVideogameHandler);

module.exports = videogameRouter;
