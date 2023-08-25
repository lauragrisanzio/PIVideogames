import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import {postVideogame} from "../../redux/actions";

import { validator } from "./validator";

import styles from "./form.module.css";

const Form = () => {

  const { allVideogames } = useSelector(state => state);
  const dispatch = useDispatch()
  const history = useNavigate();

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


  return (
    <div>
      <h1>CREAR UN NUEVO JUEGO</h1>
      <h2>Animate a crear un nuevo videojuego!!</h2>
      <div className={styles.form}>
        {/* <form onSubmit={(e) => handleSubmit(e)}> */}
        <form>
          <div className="form">
            <label htmlFor="name">Name:</label>
            <input
            // placeholder="Write a name activity"
            // type="text"
            // value={values.name}
            // name="name"
            // onChange={(e) => handleChange(e)}
            />
            {/* {errors.name1 && <p>{errors.name1}</p>} */}
          </div>
          <br />
          <div>
            <label htmlFor="background_image"> Image:</label>
            <input
            // type="number"
            // // min={1}
            // // max={24}
            // value={values.duration}
            // name="duration"
            // onChange={(e) => handleChange(e)}
            />
            {/* {errors.duration3 ? (
              <p>{errors.duration3}</p>
            ) : errors.duration2 ? (
              <p>{errors.duration2}</p>
            ) : (
              <p>{errors.duration1}</p>
            )} */}
            <br />
            <div>
              <label htmlFor="description"> Description:</label>
              <br />
              <textarea
                autoCapitalize="true"
                type="textarea"
                rows="10"
                cols="40"
                // value="1"
                // name="difficulty"
                // onChange={(e) => handleChange(e)}
              />
              {/* {errors.diff1 && <p className="errors-form">{errors.diff1}</p>} */}
            </div>
            <br />
          </div>
          <div>
            <label htmlFor="season"> Season:</label>
            <select
            // placeholder="Season to do it"
            // type="text"
            // value={values.season}
            // name="season"
            // onChange={(e) => handleChange(e)}
            >
              <option value="" selected>
                Season:
              </option>
              <option value="Autumn">Autumn</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Winter">Winter</option>
            </select>
            {/* {errors.s1 && <p className="errors-form">{errors.s1}</p>} */}
            {/* <div>{values.season}</div> */}
          </div>
          <br />
          {/* <div className="country-form">
            {/* <label htmlFor="">
              Select countries:
              <select */}
          {/* // name="countries"
                // multiple={true}
                // onChange={(e) => handleSelectCountries(e)}
              >  */}
          {/* <option > Countries </option> */}
          {/* {allCountries.map((c) => (
                  <option value={c.id}>{c.name}</option>
                ))}
              </select>
            </label>
            <div>{values.CountryId}</div> */}
          {/* </div> */}
          {/* <div>
            {values.countryId.map((country) => (
              <div>
                <input
                  className="Form__Button"
                  type="button"
                  value="X"
                  onClick={() => handleDelete(country)}

                />
                <p>{country}</p>
              </div>
            ))}
          </div> */}
          <br />
          <br />

          <div>
            <button type="submit">CREATE ACTIVITY</button>
          </div>
        </form>
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
