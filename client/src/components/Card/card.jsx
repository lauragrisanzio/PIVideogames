//componente que muestra cada videogame, cada tarjeta del videojuego
import {Link} from "react-router-dom"

import styles from "./card.module.css";

function Card({ videogame }) {  //viene por props de Cards

  const { id, name, background_image, genres } = videogame;
  
   
  return (
    <div className={styles.cardContainer}>
      <Link className={styles.Link} to={`/home/${id}`}>
      {/* <div className={styles.card}> */}
        {/*se puede hacer accesible la imagen????? VER!!! 
        IMAGEN POR DEFECTO CUANDO ES CREADO POR EL USUARIO*/}
        <div className={styles.cardin}>
          <img src={background_image} alt="" />
          <h2 className={styles.name}>{name}</h2>
          <h5 className={styles.genres}>{genres.join(" - ")}</h5>
        </div>
        {/* <div className={styles.button}> */}
          
            {/* <p className={styles.buttonin}></p> */}
        {/* </div> */}
      {/* </div> */}
          </Link>
    </div>
  );
}
export default Card; 

//esta informacion la saco de mi backend
//los modelos|
