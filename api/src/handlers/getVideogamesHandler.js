const getVideogames = require("../controllers/getVideogames");


const getVideogamesHandler = async(req, res) => {
try {
    const getAll = await getVideogames()
    return res.status(200).json(getAll);

} catch (error) {
      return res.status(400).json({ error: error.message });
}
};

module.exports = getVideogamesHandler;