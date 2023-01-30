import React, { useEffect, useState } from "react";
import { Cards } from "./Cards";
import { Row, Col } from "react-bootstrap";
import { PaginationMoveies } from "./PaginationMoveies";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovie } from "../redux/action/MoviesAction";

export const FilmList = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovie());
  }, []);
  const moviesData = useSelector((state) => state.movies);
  useEffect(() => {
    setMovies(moviesData);
  }, [moviesData]);


  return (
    <Row className="  my-3 ">
      {movies.length ? (
        movies.map((mov) => {
          return (
            <Col xs="12" className=" my-3 " lg="3" md="4">
              <Cards key={mov.id} mov={mov} />
            </Col>
          );
        })
      ) : (
        <h2 className="text-center">لا يوجد افلام.....</h2>
      )}
      {movies.length ? (
        <PaginationMoveies  />
      ) : null}
    </Row>
  );
};
