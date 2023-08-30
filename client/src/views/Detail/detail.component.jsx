import Loading from "../../components/Loading/loading.jsx";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getById, clearDetail } from "../../redux/actions.js";

import styles from "./detail.module.css";

const Detail = () => {

  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
// const history = useNavigate()

  const { id } = useParams();

  // const [details, setDetails] = useState(true)

  useEffect(() => {
    dispatch(getById(id))
   //funcion que limpie el detail
    return () => {
      dispatch(clearDetail());
    };      
  }, [dispatch,id])
  
  return (
    <div>
      <div className={styles.h1}>
        <h1>VIDEOGAME DETAIL</h1>
      </div>
      <br />
      <div className={styles.container}>
        {detail.name ? (
          <>
            <h1>{detail.name}</h1>
            <br />
            <img className={styles.img} src={detail.background_image} alt="" />
            {/* imagen por defecto??*/}
            <p>
              Name: {detail.name} (Id: {detail.id})
            </p>
            <br />
            <p>Platforms: {detail.platforms}</p>
           
            <br />
            <p>
              Description:
              {detail.description
                .split("<p>")
                .join("")
                .split("<br />")
                .join("")
                .split("</p>").join("")}
            </p>
            <br />
            <p>Date create at: {detail.released}</p>
            <br />
            <p>Rating: {detail.rating} </p>
            <br />
            <p>Rating Top: {detail.rating_top}</p>
            <br />
            <p>
              Genres:
              {detail.genres?.map((g) => (g.name ? g.name : g)).join(", ")}
            </p>
          </>
        ) : (
          <div>
            <h3>Loading...</h3>
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
