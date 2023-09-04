import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getVideogamesDB } from "../../redux/actions";

import styles from "./gamesDatabase.module.css";

const GamesDatabase = () => {

  const database = useSelector((state) => state.database);
  console.log(database);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogamesDB())
  }, [dispatch])

  return (
    <div>
      <h1>VIDEOJUEGOS CREADOS</h1>
      <div className={styles.cardList}>
        {database &&
          database.map((videogame) => {
            return (
              <div className={styles.cardin}>
                <h1 className={styles.name}>{videogame.name}</h1>
                <h3 className={styles.genres}>
                  {videogame.Genres.map((g) => g.name).join(" - ")}
                </h3>
                <h5>{videogame.description}</h5>
                <button>UPDATE</button>
              <button>DELETE</button>
              </div>
            );
          })}
      </div>
      
    </div>
  );
};

export default GamesDatabase;
