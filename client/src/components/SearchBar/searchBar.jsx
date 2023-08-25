import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { getByName, getVideogames } from "../../redux/actions"

import styles from "./searchBar.module.css";

function SearchBar() {

  // const allVideogames = useSelector(state => state.allVideogames)
  const dispatch = useDispatch();

     const [searchString, setSearchString] = useState("");

     //funcion que setea el searchstring(value) del input
     const handleChange = (e) => {
    //setSearchString(e.target.value.toLowerCase());
    setSearchString(e.target.value);
     };

     const handleSubmit = (e) => {
       e.preventDefault(); //para que la pagina no se actualice
       dispatch(getByName(searchString));
      //  dispatch(getVideogames())
     };

  return (
    <div className={styles.wrap}>
      <div className={styles.searchBox}>
        <form />
        <input
          className={styles.searchTerm}
          placeholder="Videogame to play..."
          type="search"
          onChange={handleChange}
        />
        <button
          className={styles.searchButton}
          type="submit"
          onClick={handleSubmit}
        >
          <i>Search </i>
        </button>
        {/* <Link to={"/activity"}>
          <button className={styles.buttonActivities}>Activities</button>
        </Link> */}
      </div>
    </div>
  );
}
export default SearchBar;
