import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import {getVideogames, postVideogame, getGenres} from "../../redux/actions";

import { validator } from "./validator";

import styles from "./form.module.css";


const Form = () => {

  // const allVideogames = useSelector((state) => state.allVideogames);
  const genres = useSelector((state) => state.genres);
  
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
  }, [dispatch]);
  
  const [values, setValues] = useState({  //proyectorick como inputs pero lo entiendo mas como values
    name: "",
    background_image: "",
    description: "",
    platforms: [],
    released: "",
    rating: 0,
    rating_top: 0,
    GenreId: []
  });

  const [errors, setErrors] = useState({}); //estado de los errores

  //tomamos los datos y lo guardamos en el estado:
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value.toUpperCase();
    setErrors(validator({ ...values, [property]: value }));
    //seteamos los errores en nuestro estado
    setValues({ ...values, [property]: value });  //agregamos al estado local las propiedades(name) con sus valores
    //actualizamos el estado values
  };

  const handleSelectGenres = (event) => {
    const property = event.target.name;
    const value = event.target.value.toUpperCase();
    setErrors(validator({ ...values, [property]: value }));
    setValues({
      ...values,
      GenreId: [...values.GenreId, event.target.value]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.name === "" ||
      values.background_image === "" ||
      values.rating=== 0 || values.released === "" ||
      values.description === "" ||
      values.GenreId.length === 0 ||
      values.platforms.length === 0
    )
      return alert("You must complete all fields");
   
    dispatch(postVideogame(values))
      // .then(() => dispatch(getActivities()))
      //         .then(() => dispatch(getCountries()))
      // .then(() => history("/home"));
    console.log(values);
    alert("Activity Created");
    setValues({
      name: "",
      background_image: "",
      description: "",
      platforms: [],
      released: "",
      rating: 0,
      rating_top: 0,
      GenreId: [],
    });
  }
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.tittle}>
          <h1>CREAR UN NUEVO JUEGO</h1>
          <h2>Animate a crear un nuevo videojuego!!</h2>
        </div>
        <div className={styles.options}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form">
              <label htmlFor="name">Name:</label>
              <input
                placeholder="Write a videogames´s game"
                type="text"
                value={values.name.toUpperCase()}
                name="name"
                onChange={(e) => handleChange(e)}
              />
              {errors.name1 ? <p>{errors.name1}</p> : <p>{errors.name2}</p>}
            </div>
            <br />
            <div>
              <label htmlFor="background_image"> Image:</label>
              <input
                type="text"
                value={values.background_image}
                name="background_image"
                onChange={(e) => handleChange(e)}
              />
              {errors.background_image1 ? (
                <p>{errors.background_image1}</p>
              ) : (
                <p>{errors.background_image2}</p>
              )}
            </div>
            <br />
            <div>
              <label htmlFor="description"> Description:</label>
              <br />
              <textarea
                autoCapitalize="true"
                type="textarea"
                rows="6"
                cols="30"
                name="description"
                placeholder="Describe the videogame"
                value={values.description}
                onChange={(e) => handleChange(e)}
              />
              {errors.description1 ? (
                <p>{errors.description1}</p>
              ) : (
                <p>{errors.description2}</p>
              )}
            </div>
            <br />
            <div>
              <label htmlFor="released"> Creation date:</label>
              <br />
              <input
                type="text"
                value={values.released}
                name="released"
                placeholder="Creation date"
                onChange={(e) => handleChange(e)}
              />
              {errors.released1 ? (
                <p>{errors.released1}</p>
              ) : (
                <p>{errors.released2}</p>
              )}
            </div>
            <br />
            <div>
              <label htmlFor="platforms"> Platforms:</label>
              <input //SI ME ALCANZA EL TIEMPO, GENERAR EL MODELO Y TRAERME LAS PLATFORMS DE LA API
                name="platforms"
                placeholder="Platform to play..."
                type="text"
                value={values.platforms.join}
                onChange={(e) => handleChange(e)}
              />
              {errors.platforms1 ? (
                <p>{errors.platforms1}</p>
              ) : (
                <p>{errors.platforms2}</p>
              )}
              <div>{values.platforms}</div>
            </div>
            <br />
            <div>
              <label htmlFor="rating"> Rating:</label>
              <input
                name="rating"
                type="number"
                value={values.rating}
                onChange={(e) => handleChange(e)}
              />
              {errors.rating1 ? (
                <p>{errors.rating1}</p>
              ) : (
                <p>{errors.rating2}</p>
              )}
            </div>
            <br />
            <div>
              <label htmlFor="rating"> Rating Top:</label>
              <input
                name="rating_top"
                type="number"
                value={values.rating_top}
                onChange={(e) => handleChange(e)}
              />
              {errors.rating_top1 ? (
                <p>{errors.rating_top1}</p>
              ) : (
                <p>{errors.rating_top2}</p>
              )}
            </div>
            <br />
            <div className="selectgenres">
              <label htmlFor="genres">Select genres:</label>
              <select
                value={values.GenreId} //ESTO ES NUEVO VER SI FUNCIONA!!!
                name="genres"
                size={1}
                onChange={(e) => handleSelectGenres(e)}
              >
                {genres.map((g) => (
                  <option value={g.id}>{g.name}</option>
                ))}
              </select>
              <div>{values.GenreId.join("-")}</div>
              {errors.GenreId1 && <p>{errors.GenreId1}</p>}
            </div>

            <div>
              <button type="submit">CREATE ACTIVITY</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  };


export default Form;

//Nombre.
// Imagen.
// Descripción.
// Plataformas.
// Fecha de lanzamiento.
// Rating.
// Posibilidad de seleccionar/agregar varios géneros en simultáneo.
// Botón para crear el nuevo videojuego.
