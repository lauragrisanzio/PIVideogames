import { useDispatch} from "react-redux"
import { useState } from "react";
import { getByName, getVideogames} from "../../redux/actions"

import styles from "./searchBar.module.css";


function SearchBar({setCurrentPage, setInput }) {
  const dispatch = useDispatch();

  const [searchString, setSearchString] = useState("");
  // console.log(searchString);
  //funcion que setea el searchstring(value) del input
  const handleChange = (e) => {
    //setSearchString(e.target.value.toLowerCase());
    setSearchString(e.target.value.toUpperCase());
  // setSearchString("");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //para que la pagina no se actualice
    dispatch(getByName(searchString));
    // if (!searchString) alert("not found") && dispatch(getVideogames())
    // setSearchString(" ");
    // dispatch(getVideogames())
    // setInput(1);
    // setCurrentPage(1)
  };

  const handleClear = () => {
   dispatch(getVideogames())
    setSearchString(" ");
    setInput(1);
    setCurrentPage(1);
  };

  return (
    <div className={styles.wrap}>
      <form onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
          <input
            className={styles.searchTerm}
            placeholder="Videogame to play..."
            type="search"
            value={searchString}
            onChange={(e) => handleChange(e)}
          />
          <button
            className={styles.searchButton}
            type="submit"
            // onClick={handleSubmit}
          >
            <i>SEARCH</i>
          </button>
          <button
            className={styles.searchButtonC}
            type="submit"
            onClick={handleClear}
          >
            <i>CLEAR</i>
          </button>
        </div>
      </form>
    </div>
  );
}
export default SearchBar;
