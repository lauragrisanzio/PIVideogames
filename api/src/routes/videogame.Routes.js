const { Router } = require("express");

const getVideogamesHandler = require("../handlers/getVideogamesHandler")
const getVideoGByIdHandler = require("../handlers/getVideoGByIdHandler.js")
const postVideogameHandler = require("../handlers/postVideogameHandler")
// const getVideogameByNameHandler = require("../handlers/getVideogamesHandler");

const videogameRouter = Router();

videogameRouter.get("/", getVideogamesHandler);

// videogameRouter.get("/name", getVideogameByNameHandler);//no me funciona esta ruta!!

videogameRouter.get("/:idVideogame", getVideoGByIdHandler);

videogameRouter.post("/", postVideogameHandler);

module.exports = videogameRouter;
