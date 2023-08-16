const { Router } = require("express");

// const getAllActivitiesHandler = require("../handlers/getAllActivitiesHandler");
// const createActivityHandler = require("../handlers/createActivityHandler");

const genresRouter = Router();

genresRouter.get("/", (req, res) => {
    res.status(200).send("Ruta para obtener todos los generos")
});



module.exports = genresRouter;
