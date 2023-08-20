const getVideogames = require("../controllers/getVideogames");
const getVideogameByName = require("../controllers/getVideoGByName")


const getVideogamesHandler = async (req, res) => {
    const {name} = req.query
try {
    const getAll =
        name ?
        await getVideogameByName(name)
       : await getVideogames()
    return res.status(200).json(getAll);

} catch (error) {
      return res.status(400).json({ error: "No se encuentran los videjuegos solicitados" }); //en ingles
}
};

module.exports = getVideogamesHandler;