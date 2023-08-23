// //tambien tiene el estado(lo tiene como tal) pero pertenece al store -
// //aca se declara el estado
import {GET_VIDEOGAMES} from "./actions";
// import {
//   GET_COUNTRIES, GET_BY_NAME, GET_BY_DETAIL, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY,
//   ORDER_BY_AZ, ORDER_BY_POPULATION, GET_ACTIVITIES, CREATE_ACTIVITIES} from "./actions";

const initialState = {
  allVideogames: [],
  videogames: [], //copia de allVideogames
};


const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    //de acuerdo a la action type, hace una u otra cosa
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: action.payload, //el action payload va a ser todos los videogames
        // videogames: action.payload,
      };
   
        default:
          return state;
  
  };
}
 
export default rootReducer; 