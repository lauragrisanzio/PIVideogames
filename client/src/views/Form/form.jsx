import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { getVideogames, postVideogame, getGenres, getPlatforms } from "../../redux/actions";
import Loading from "../../components/Loading/loading"

import { validator } from "./validator";
import styles from "./form.module.css";


const Form = () => {

  // const allVideogames = useSelector((state) => state.allVideogames);
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  // console.log(platforms);
  
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
    dispatch(getPlatforms());
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

   const handleSelectPlatforms = (event) => {
     const property = event.target.name;
     const value = event.target.value.toUpperCase();
     setErrors(validator({ ...values, [property]: value }));
     setValues({
       ...values,
       platforms: [...values.platforms, event.target.value],
     });
   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.name === "" ||
      // values.background_image === "" ||
      values.rating=== 0 || values.released === "" ||
      values.description === "" ||
      values.GenreId.length === 0 ||
      values.platforms.length === 0
    )
      return alert("You must complete all fields");
   
    dispatch(postVideogame(values))
     setValues({
      name: "",
      background_image: "",
      description: "",
      platforms: [],
      released: "",
      rating: 0,
      rating_top: 0,
      GenreId: [],
      genreName:[]
     });
   
    // history("/home") //nuevo, ver si funciona!!!!! no me convence como queda
  }
  // console.log(values);
  return (
    <div className={styles.container}>
      {/* <div className={styles.form}> */}
      <div className={styles.title}>
        <div className={styles.title1}>
          <h1>A NEW VIDEOGAME?</h1>
          <h2>CREATE IT! </h2>
        </div>
      </div>
      <div className={styles.options}>
        {platforms.length ? (
          <form className={styles.form } onSubmit={(e) => handleSubmit(e)}>
            
              <label htmlFor="name">Name:</label>
              <input
                placeholder="Write a videogames´s game"
                type="text"
                value={values.name.toUpperCase()}
                name="name"
                onChange={(e) => handleChange(e)}
              />
              {errors.name1 ? (
                <span>{errors.name1}</span>
              ) : (
                <span>{errors.name2}</span>
              )}
            
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
                <span>{errors.background_image1}</span>
              ) : (
                <span>{errors.background_image2}</span>
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
                <span>{errors.description1}</span>
              ) : (
                <span>{errors.description2}</span>
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
                <span>{errors.released1}</span>
              ) : (
                <span>{errors.released2}</span>
              )}
            </div>
            <br />
            <div>
              <label htmlFor="platforms"> Platforms:</label>
              <select
                // value={values.platforms} //ESTO ES NUEVO VER SI FUNCIONA!!!
                name="platforms"
                size={1}
                onChange={(e) => handleSelectPlatforms(e)}
              >
                <option selected>Platform</option>
                {platforms.map((p, i) => (
                  <option key={i} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              {errors.platforms1 ? (
                <span>{errors.platforms1}</span>
              ) : (
                <span>{errors.platforms2}</span>
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
                <span>{errors.rating1}</span>
              ) : (
                <span>{errors.rating2}</span>
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
                <span>{errors.rating_top1}</span>
              ) : (
                <span>{errors.rating_top2}</span>
              )}
            </div>
            <br />
            <div className="selectgenres">
              <label htmlFor="genres" selected>
                Select genres:
              </label>
              <select
                // value={values.GenreId} //ESTO ES NUEVO VER SI FUNCIONA!!!
                name="genres"
                // size={1}
                onChange={(e) => handleSelectGenres(e)}
              >
                <option selected>Genres</option>
                {genres.map((g, i) => (
                  <option key={i} value={g.id}>
                    {g.id}-{g.name}
                  </option>
                ))}
              </select>
              {errors.GenreId1 && <span>{errors.GenreId1}</span>}
              <div>{values.GenreId}</div>
            </div>
      <div>
              <button className={styles.button }type="submit">CREATE ACTIVITY</button>
      </div>
          </form>
        ) : (
          <div>
            {/* <h3 className={styles.loading}>Loading...</h3> */}
            <Loading />
          </div>
        )}
      </div>
    </div>
    // </div>
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
