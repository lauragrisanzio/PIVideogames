// //tambien tiene el estado(lo tiene como tal) pero pertenece al store -
// //aca se declara el estado
//reducer: nuevo estado a mostrar - se encarga de procesar las acciones
import { GET_VIDEOGAMES, GET_BY_NAME, POST_VIDEOGAME } from "./actions";
// , GET_BY_NAME, GET_BY_DETAIL, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY,
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
        videogames: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        allVideogames: action.payload, //el action payload va a ser todos los videogames
        videogames: action.payload,
      };
    case POST_VIDEOGAME:
      return {
        ...state,
        allVideogames: action.payload, //el action payload va a ser todos los videogames
        videogames: action.payload,
      };

    default:
      return state;
  };
}
 
export default rootReducer; 