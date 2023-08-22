// //tambien tiene el estado(lo tiene como tal) pero pertenece al store -
// //aca se declara el estado
import{GET_VIDEOGAMES} from "./actions";
// import {
//   GET_COUNTRIES, GET_BY_NAME, GET_BY_DETAIL, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY,
//   ORDER_BY_AZ, ORDER_BY_POPULATION, GET_ACTIVITIES, CREATE_ACTIVITIES} from "./actions";

const initialState = {
  allVideogames: [],
};


const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    //de acuerdo a la action type, hace una u otra cosa
    case GET_VIDEOGAMES:
      return {
        ...state,
        // allCountries: action.payload, //el action payload va a ser todos los paises
        // countries: action.payload,
      };

    //     case GET_ACTIVITIES:
    //       return {
    //         ...state,
    //         allActivities: action.payload, //el action payload va a ser todos los paises
    //         activities: action.payload,
    //       };

    //     case CREATE_ACTIVITIES:
    //       return {
    //         ...state,
    //         allActivities: [...state.allActivities, action.payload],
    //         // allActivities: state.allActivities.concat(action.payload),
    //       };

    //     case GET_BY_NAME:
    //       return {
    //         ...state,
    //         allCountries: action.payload, //el action payload va a ser todos los paises
    //       };
    //     case GET_BY_DETAIL:
    //       return {
    //         ...state,
    //         detail: action.payload, //el action payload va a ser todos los paises
    //       };

    //     case FILTER_BY_CONTINENT:
    //       const filterByContinent = state.allCountries;
    //       const continentFilter =
    //         action.payload === "All"
    //           ? filterByContinent
    //           : state.countries.filter((c) => c.continent === action.payload);
    //       return {
    //         ...state,
    //         // allCountries: filterByContinent,
    //         // countries: state.allCountries,

    //         allCountries: continentFilter,
    //       };

    //     case FILTER_BY_ACTIVITY:
    //       const filterByActivities = state.activities;
    //       console.log(filterByActivities);
    //       const filteredAct = action.payload === "All" ? filterByActivities :
    //          filterByActivities.filter( act => act.name === action.payload)
    //       console.log(filteredAct);
    //       // return activities.includes(action.payload)
        
    //         return {
    //           ...state,
    //           allActivities: filteredAct,
    //         };
      

    //     case ORDER_BY_AZ:
    //       const order = [...state.allCountries].sort((a, b) => {
    //         if (action.payload === "A-Z") {
    //           return a.name > b.name ? 1 : -1;
    //         } else {
    //           return a.name < b.name ? 1 : -1;
    //         }
    //       });
    //       return {
    //         ...state,
    //         allCountries: order,
    //       };

    //     case ORDER_BY_POPULATION:
    //       const orderPopulation = [...state.allCountries].sort((a, b) => {
    //         if (action.payload === "Lower Population") {
    //           return a.population > b.population ? 1 : -1;
    //         } else {
    //           return a.population < b.population ? 1 : -1;
    //         }
    //       });
    //       return {
    //         ...state,
    //         allCountries: orderPopulation,
    //       };

    //     default:
    //       return state;
    //   }
  };
}
 
export default rootReducer; 