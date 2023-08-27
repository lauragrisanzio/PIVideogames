//componente que muestra cada videogame, cada tarjeta del videojuego
import {Link} from "react-router-dom"

import styles from "./card.module.css";

function Card({ videogame }) {  //viene por props de Cards

  const { id, name, background_image, genres } = videogame;
  // console.log(videogame);
   
  return (
    <div className={styles.card}>
      
    <div className={styles.cardContainer}>
        {/*se puede hacer accesible la imagen????? VER!!! 
        IMAGEN POR DEFECTO CUANDO ES CREADO POR EL USUARIO*/}
        <img src={background_image} alt="" />
        <h2>{name}</h2>
        <h5>{genres}</h5>
        
        <Link className={styles.Link} to={`/home/${id}`}>
          <p>MORE DETAILS</p>
        </Link>

      </div>
    </div>
  );
}
export default Card; 

//esta informacion la saco de mi backend
//los modelos|
