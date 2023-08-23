//componente que engloba a todos los videojuegos
import Card from "../Card/card"

import styles from "./cards.module.css"

function Cards({ allVideogames}) {
  
  return (
    <div>
      <div className={styles.cardList}>
        {allVideogames &&
          allVideogames.map((videogame) => <Card videogame={videogame} />)}
      </div>
    </div>
  );
}
export default Cards;

//cards: contenedor de muchas tarjetitas - por eso hay otro componente que es card que representa 1 sola
//vamos a querer renderizar card