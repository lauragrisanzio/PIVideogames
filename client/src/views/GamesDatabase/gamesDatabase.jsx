import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getVideogamesDB } from "../../redux/actions";

import styles from "./gamesDatabase.module.css";

const GamesDatabase = () => {
  
  const dispatch = useDispatch()
  const videogamesDatabase = useSelector((state) => state.videogamesDb);
  console.log(videogamesDatabase);

  useEffect(() => {
    dispatch(getVideogamesDB())
  }, [dispatch])

  return (
    <div>
      <div className={styles.cardList}>
        {videogamesDatabase &&
          videogamesDatabase.map((videogame) => {
            return (
              videogame.name
            )
          })}
      </div>
    </div>
  );
};

export default GamesDatabase;
