const { Genres, Videogame } = require("../db");

const postVideogame = async ({
  name,
  description,
  platforms,
  background_image,
 released,
  rating,
  rating_top,
   GenreId
}) => {
  
  //validaciones: 1° si existe el videog, 2° si el genre que pasaron existe
  const videogameExists = await Videogame.findOne({ where: { name } }); //validacion para la base de datos
  if (videogameExists) throw Error("This videogame alredy exists");


  if (!GenreId) throw Error("Must complete field: genres");

  const newVideogame = await Videogame.create({
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
      rating_top,
  });
// console.log(newVideogame);
  // let genres = await Genres.findAll({
  //   where: {
  //     name: GenreId,
  //   }
  // });

  await newVideogame.addGenres(GenreId);
  // console.log(genres);
  // newVideogame = await Videogame.findAll({
  //   include: {
  //     model: Genres,
  //     attributes: ["name"],
  //     through: { attributes: [] },
  //   },
  // });
  
  return newVideogame;
};

module.exports = postVideogame;
