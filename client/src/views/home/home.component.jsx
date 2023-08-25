//hook para controlar el ciclo de vida: useEffect
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import SearchBar from "../../components/SearchBar/searchBar";
import {getVideogames}  from "../../redux/actions";

// import NavBar from "../../components/navbar/navbar.component";
import Cards from "../../components/Cards/cards";
// import Header from "../../components/headers/header.component";
// import Pagination from "../../components/pagination/pagination.component";

import styles from"./home.module.css";


function Home() {

  const dispatch = useDispatch(); //se le envia una action al estado

  //componente quiero que estes suscripto a cualquier cambio que ocurra en el estado allVideogames
  const allVideogames = useSelector((state) => state.allVideogames); //se indica al componente de que estado depende, a que estado quiero estar suscripto
   
 
   useEffect(() => {
    dispatch(getVideogames()); //1° parametro lo que queremos ejecutar al momento de hacer el dispatch, cuando se monta
// // //     // return(()=>{}) //=> en esta callback se ejecuta una fx al momento de desmontar
  }, [dispatch]); //2° parametro una array de dependecia

  // const handleOnClick = () => {
   //   getVideogames();
    // };
// console.log(handleOnClick()); 
  
//   const countriesPage = allCountries.slice(0, 10);
//   const countriesPerPage = 10;
//   const [currentPage, setCurrentPage] = useState(1); //current page= pagina actual
//   const pageNumber = Math.ceil(allCountries / countriesPerPage);
  
//   const pageClick = (pageNumber) => {
//     setCurrentPage(pageNumber)
//   }

  return (
    <div className={styles.home}>
      {/* <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Header />
      <Pagination
        currentPage={currentPage}
        pageNumber={pageNumber}
        pageClick={pageClick}
      /> */}
      <h1>VIEW HOME</h1>
      <SearchBar/>
      <p>
        Esta es la HOME page: tiene que tener: *Botones/Opciones para filtrar
        por continente y por tipo de actividad turística. *Paginado: el listado
        de países se hará por partes. Tu SPA debe contar con un paginado que
        muestre un total de 10 países por página.
      </p>
      <button>ALL VIDEOGAMES</button>;
      <div className={styles.cardList}>
        <Cards allVideogames={allVideogames} />
      </div>
    </div>
  );
};

//le pasa como props el nombre no el destructuring 

export default Home;

//Cards: componente que se renderiza dentro de otro
//le pasa como props el nombre no el destructuring 