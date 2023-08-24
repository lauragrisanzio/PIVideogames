import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_BY_NAME = "GET_BY_NAME";
// export const GET_BY_DETAIL = "GET_BY_DETAIL";
// export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
// export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
// export const ORDER_BY_AZ = "ORDER_BY_AZ";
// export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
// export const GET_ACTIVITIES = "GET_ACTIVITIES";
// export const CREATE_ACTIVITIES = "CREATE_ACTIVITIES"

export const getVideogames =  () => {
       return async (dispatch) => {
         const response = await axios("http://localhost:3001/videogame");
        //  console.log(response);
         
         return dispatch({
           type: GET_VIDEOGAMES,
           payload: response.data  //me llega bien la informacion
        }
        )
    }
};

// export const getActivities = () => {
//   return async (dispatch) => {
//     const response = await axios("http://localhost:3001/activities");
//     return dispatch({
//       type: "GET_ACTIVITIES",
//       payload: response.data
//     });
//   };
// };

export const getByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios(`http://localhost:3001/videogame?name=${name}`);
      // console.log(response);
    return dispatch({
      type: GET_BY_NAME,
      payload: response.data,
    });
    } catch (error) {
      alert("No hay videojuegos con ese nombre, intente nuevamente")
    }
  };
};

// export const getByDetail = (id) => {
//   return async (dispatch) => {
//     const response = await axios(`http://localhost:3001/countries/${id}`);
//     return dispatch({
//       type: "GET_BY_DETAIL",
//       payload: response.data
      
//     });
//   };
// };

// export function createActivities  (data)  {
//   console.log(data);
//   return async (dispatch) => {
//     const newActivity = await axios.post("http://localhost:3001/activities", data);
//     return newActivity;
//   };
//     //  return function (dispatch) {
//     //    return axios
//     //      .post("http://localhost:3001/activities", data)
//     //      .then((response) => response.data)
//     //      .then((response) => {
//     //        dispatch({ type: CREATE_ACTIVITIES, payload: response });
//     //        alert("Se creo la actividad. ");
//     //        return true;
//     //      })
//     //      .catch((error) => {
//     //        console.log(error);
//     //        alert(
//     //          "No se puede crear la actividad. Error: " + error.response.data
//     //        );
//     //        return false;
//     //      });
//     //  };
// }

// export const filterContinent = (payload) => {
//   return {
//     type: "FILTER_BY_CONTINENT",
//     payload,
//   };
// };

// export const filterByActivity = (activities) => {
//   console.log(activities);
//   return {
//     type: "FILTER_BY_ACTIVITY",
//     payload: activities,
//   };
// };

// export const orderByAz = (order) => {
// return {
//   type: "ORDER_BY_AZ",
//   payload: order,
// };

// };

// export const orderByPopulation = (order) => {

//   return {
//   type: "ORDER_BY_POPULATION",
//   payload: order,
//   };
// };

// //se solicita la informacion
// //que queremos hacer con el estado
// //payload es la data
