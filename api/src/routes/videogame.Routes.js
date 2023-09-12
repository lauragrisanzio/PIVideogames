const { Router } = require("express");

const getVideogamesHandler = require("../handlers/getVideogamesHandler")
const getVideoGByIdHandler = require("../handlers/getVideoGByIdHandler.js")
const getVideoGCreatedHandler = require("../handlers/getVideoGCreatedHandler")
const postVideogameHandler = require("../handlers/postVideogameHandler")
const putVideogameHandler = require("../handlers/putVideogameHandler")
const getPlatformsHandler = require("../handlers/getPlatformsHandler");
const deleteVideoGCreatedHandler = require("../handlers/deleteVideGCreatedHandler");
// const getVideogameByNameHandler = require("../handlers/getVideogamesHandler");

const videogameRouter = Router();

videogameRouter.get("/", getVideogamesHandler);
videogameRouter.get("/platforms", getPlatformsHandler);
videogameRouter.get("/created", getVideoGCreatedHandler);
// videogameRouter.get("/name", getVideogameByNameHandler);//el query es un adicional de la ruta get
//la ruta es la misma igual que el mismo handler...
videogameRouter.get("/:idVideogame", getVideoGByIdHandler);
videogameRouter.post("/", postVideogameHandler);
videogameRouter.put("/created/update/:idVideogame", putVideogameHandler);
videogameRouter.delete("/created/delete/:idVideogame", deleteVideoGCreatedHandler);

module.exports = videogameRouter;
//    (req, res) => {
//     res.send("Ruta para eliminar videogames de la base de datos")
// }