// //tambien tiene el estado(lo tiene como tal) pero pertenece al store -
// //aca se declara el estado
//reducer: nuevo estado a mostrar - se encarga de procesar las acciones
import {
  GET_VIDEOGAMES, GET_BY_NAME, POST_VIDEOGAME, GET_BY_ID, CLEAR_DETAIL, GET_GENRES,
  ORDER_BY_AZ, ORDER_BY_RATING
} from "./actions";
// , GET_BY_NAME, GET_BY_DETAIL, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY,
//   ORDER_BY_AZ, ORDER_BY_POPULATION, GET_ACTIVITIES, CREATE_ACTIVITIES} from "./actions";

const initialState = {
  allVideogames: [],
  videogames: [], //copia de allVideogames
  detail: [],
  genres:[]
};


const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    //de acuerdo a la action type, hace una u otra cosa
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: action.payload, //el action payload va a ser todos los videogames
        videogames: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload, //el action payload va a ser todos los videogames
      };

    case GET_BY_NAME:
      return {
        ...state,
        allVideogames: action.payload, //el action payload va a ser todos los videogames
        videogames: action.payload,
      };

    case GET_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };

    case POST_VIDEOGAME:
      return {
        ...state,
        allVideogames: action.payload, //el action payload va a ser todos los videogames
        videogames: action.payload,
      };

    case CLEAR_DETAIL:
      return {
        ...state,
        detail: [],
      };
    case ORDER_BY_AZ:
      const order = [...state.allVideogames].sort((a, b) => {
        if (action.payload === "A-Z") {
          return a.name > b.name ? 1 : -1;
        } else {
          return a.name < b.name ? 1 : -1;
        }
      });
      return {
        ...state,
        allVideogames: order,
      };

    case ORDER_BY_RATING:
      const orderRating = [...state.allVideogames].sort((a, b) => {
        if (action.payload === "Lower Rating") {
          return a.rating > b.rating ? 1 : -1;
        } else {
          return a.rating < b.rating ? 1 : -1;
        }
      });
      return {
        ...state,
        allVideogames: orderRating,
      };
    default:
      return state;
  };
}
 
export default rootReducer; 