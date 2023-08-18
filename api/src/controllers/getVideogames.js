const axios = require("axios");
const { Genres, Videogame } = require("../db");

const {API_KEY} = process.env

const getVideogames = async () => {
    const { data } = await axios
      .get(`https://api.rawg.io/api/games?key=${API_KEY}`) //aca solo traemos la pagina 1, la de
      .then(axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`));

    return data;
};

module.exports = getVideogames;

//Promise.all es en realidad una promesa que toma un arreglo de promesas como una entrada (un iterable). 
//Luego se resuelve cuando todas las promesas se resuelven o si cualquiera de ellos es rechazado.;