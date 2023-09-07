import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getVideogamesDB, deleteVideogame } from "../../redux/actions";

import styles from "./gamesDatabase.module.css";

const GamesDatabase = () => {
  const {id} = useParams();
  const database = useSelector((state) => state.database);
  // console.log(database);

  const dispatch = useDispatch();


  console.log(id);

  useEffect(() => {
    dispatch(getVideogamesDB())
  }, [dispatch])

  const handleOnClick = () => {
    dispatch(deleteVideogame(id))
  };

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
              <button onClick={()=>handleOnClick(id)}>DELETE</button>
              </div>
            );
          })}
      </div>
      
    </div>
  );
};

export default GamesDatabase;
