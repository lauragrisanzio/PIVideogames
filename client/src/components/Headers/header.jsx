import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { orderByAz, orderByRating, filterByActivity, filterContinent, getVideogames} from "../../redux/actions";

import styles from "./header.module.css";



const Header = () => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  // const allCountries = useSelector((state) => state.allCountries); //= a mapStateToProps, me traigo la info del estado global
  // const countries = useSelector((state) => state.countries);
   const allVideogames = useSelector((state) =>state.allVideogames)
  
  


  const handleOrder = (event) => {
    setAux(!aux);
    //  if (event.target.value === "all") dispatch(getVideogames());
    dispatch(orderByAz(event.target.value));
  };

   const handleOrderRating = (event) => {
     setAux(!aux);
      // if (event.target.value === "all") dispatch(getVideogames());
     dispatch(orderByRating(event.target.value));
  };
  
useEffect(() => {
    dispatch(getVideogames())
  }, [dispatch]);
  // const handleFilterContinent = (event) => {
    
  //   event.preventDefault();
  //   if (event.target.value === "All")
  //     dispatch(getCountries());
  //   else dispatch(filterContinent(event.target.value));
    
  // };
  // const handleFilterActivity = (event) => {
  //   event.preventDefault();
  //   dispatch(<ActivityCard />)
    
  
  // };
  
  return (
    <div className={styles.containerFilters}>
      <select name="order" autoFocus onChange={handleOrder}>
        <option value="all" selected>
          Alphabetical Order:
        </option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>

      <select name="orderRating" autoFocus onChange={handleOrderRating}>
        <option value="all" selected>
          Rating Order:
        </option>
        <option value="Lower Rating">Lower Rating</option>
        <option value="Higher Rating">Higher Rating</option>
      </select>

      {/* <select name="filter" onChange={handleFilterContinent}>
        <option  selected>
          Filter by Continent:
        </option>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="South America">South America</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="North America">North America</option>
        <option value="Asia">Asia</option>
      </select> */}

      {/* *ver traduciopn con la Vico  */}
      {/* <select name="filter" id="Filter Activity"onChange={handleFilterActivity}>
        <option  selected>
          Filter by Activities's Season
          </option>
        <option value="All"> All</option>
        {allActivities.map((a) => (
          <option value={a.name}>{a.name}</option>
        ))}
        
      </select> */}

      {/* {countries.map(({ id, name, flag, continent }) => {
        return (
          <Card
            // key={id}
            // id={id}
            // flag={flag}
            // name={name}
            // continent={continent}
          />
        );
      })} */}
    </div>
  );
}

export default Header