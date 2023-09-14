//componente que engloba a todos los videojuegos
import Card from "../Card/card"


import styles from "./cards.module.css"

function Cards({allVideogames, numberEnd, numberStart}) {
  
  const slicePage = allVideogames && allVideogames.slice(numberStart, numberEnd);
  return (
    <div className={styles.cardcontainer} >
     
        <div className={styles.cardList}>
          {slicePage &&
            slicePage.map((videogame) => <Card videogame={videogame} key={videogame.id} />)}
        </div> 
    </div>
  );
}
export default Cards;

//cards: contenedor de muchas tarjetitas - por eso hay otro componente que es card que representa 1 sola
//vamos a querer renderizar card