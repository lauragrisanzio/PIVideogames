import Loading from "../../components/Loading/loading.jsx";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getById } from "../../redux/actions.js";

import styles from "./detail.module.css";

const Detail = () => {

  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
// const history = useNavigate()

  const { id } = useParams();

  const [details, setDetails] = useState({})

  useEffect(() => {
    dispatch(getById(id))
   //funcion que limpie el detail
    return setDetails({})
  }, [ dispatch,id])
  
 return (
    <div>
      <h1>VIDEOGAMES DETAIL</h1>
      {detail.name ? (
        <>
          <h1>
            {detail.name}
            <h4>(Id: {detail.id})</h4>
          </h1>
          <img src={detail.background_image} alt="" />
          {/* imagen por defecto??*/}
          <p>Platforms: {detail.platforms}</p>
          <p>Description: {detail.description}</p>
          <p>Date create at: {detail.released}</p>
          <p>Rating: {detail.rating} </p>
          <p>Rating Top: {detail.rating_top}</p>
          <p>Genres: {detail.genres || detail.Genres.map((g) => g.name)}</p> 
        </>
      ) : (
        <div>
          <h3>Loading...</h3>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Detail;
