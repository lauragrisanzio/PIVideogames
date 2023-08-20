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
  const videogameExists = await Videogame.findOne({ where: { name } });
  if (videogameExists) throw Error("This videogame alredy exists");
  if (!GenreId) throw Error("Must complete field: genres");

  const newVideogame = await Videogame.create({
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
      rating_top
  });

  await newVideogame.addGenres(GenreId);
  return newVideogame;
};

module.exports = postVideogame;
