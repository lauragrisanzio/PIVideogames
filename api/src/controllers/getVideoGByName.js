const axios = require("axios");
const { Genres, Videogame } = require("../db");
const getVideogames = require("./getVideogames")
const {Op} = require("sequelize")

const { API_KEY } = process.env;

const getVideogameByName = async (name) => {
 if(!name) throw new Error ("Please, complete search")
 

  const videogamesList = await getVideogames();
  // console.log(videogamesList);
  const vgName = await videogamesList.filter(v => v.name.toLowerCase().includes(name.toLowerCase()))

   return vgName.splice(0, 15);
   
};
module.exports = getVideogameByName;

// //Page_Size para determinar cuántos registros componen una página lógica de datos.

 // const data0 = await axios(`https://api.rawg.io/api/games?key=${API_KEY}`)
  //   .then((response) => response.data); //aca solo traemos la pagina 1, la de
  // const data1 = await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`)
  //   .then((response) => response.data);
  // const data2 = await axios(
  //   `https://api.rawg.io/api/games?key=${API_KEY}&page=3`
  // ).then((response) => response.data);
  // const data3 = await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`)
  //   .then((response) => response.data);
  // const data4 = await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`)
  //   .then((response) => response.data);
  // const data5 = await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=6`)
  //   .then((response) => response.data);

  // await Promise.all([data0, data1, data2, data3, data4, data5]).then((d) => {
  //   apiGameInfo = d[0].results
  //     .concat(d[1].results)
  //     .concat(d[2].results)
  //     .concat(d[3].results)
  //     .concat(d[4].results)
  //     .concat(d[5].results);
  // });

  // console.log(apiGameInfo);
    
  // const allVideogamesApi = await apiGameInfo.map((v) => {
      
  // const { data } = await axios(
  //   `https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`
  // );
  // if (!apiGameInfo.results) throw new Error("No se encontraron videogames con ese nombre");
  // const allVideogames = await getVideogames()
  
  // const dataApiByName = await apiGameInfo.map((v) => {
  //   return {
  //     id: v.id,
  //     name: v.name,
  //     released: v.released,
  //     background_image: v.background_image,
  //     rating: v.rating,
  //     rating_top: v.rating_top,
  //     platforms: v.platforms.map((p) => p.platform.name),
  //     genres: v.genres.map((g) => g.name),
  //   };
  // });

  // console.log(dataApiByName);
  // const apiByName = await dataApiByName.filter(v => v.name.toLowerCase.includes(name.toLowerCase()) )
  // console.log(apiByName);
  //aca ya me esta buscando por nombre
  // const searchByNameDatabase = await Videogame.findAll({
  //   //findAll devuelve un array - findOne un objeto - necesitamos todos los paises que coincidan
  //   where: {
  //     name: {
  //       [Op.iLike]: `%${name}%`,
  //     },
  //   },
  //   include: {
  //     model: Genres,
  //     attributes: ["name"],
  //     through: {
  //       atributes: [],
  //     },
  //   },
  //   //   limit: 15,
  // });

  // const videogameResults = dataApiByName.concat(searchByNameDatabase);
  
  // if (!videogameResults) throw new Error("no hay info");
  // const videogameByName =  videogameResults.map((v) => {
  //   return {
  //     id: v.id,
  //     name: v.name,
  //     released: v.released,
  //     background_image: v.background_image,
  //     rating: v.rating,
  //     rating_top: v.rating_top,
  //     platforms: v.platforms,
  //     genres: v.genres || v.Genres.map((g) => g.name),
  //   };
  // });
  