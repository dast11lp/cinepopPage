import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesMiddleware } from "../../../features/ListingMovies/ListingMoviesSlice";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import { setModal } from "../../../features/Modal/modalSlice";
import { Loading } from "./Loading";

export const ListingMovies = () => {
  const listMovies = useSelector((state) => state.listMovies.listingMovies);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesMiddleware())
    .catch((error) => {
      dispatch(setModal({
        type: "error",
        title: "Error de conexion.",
        message: error.toString(),
        open: true,
      }))
    });
    
  }, []);

  if (listMovies.length > 0) {
    return (
      <div className="listMovies">
        {listMovies.map((movie) => (
          <Link to={`/cinepopPage/funciones/${movie.id}`} key={movie.id} className="card__link">
            <Card
              title={movie.movieName}
              img={movie.poster}
              language={movie.language}
              description={movie.descripction}
              director={movie.director}
              protagonists={movie.protagonists}
              country={movie.country}
            />
          </Link>
        ))}
      </div>
    );
  } else {
    return (<Loading />)
  }
};
