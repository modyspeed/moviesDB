import React from "react";
import { Cards } from "./Cards";
import { Row, Col } from "react-bootstrap";
import { PaginationMoveies } from "./PaginationMoveies";

export const FilmList = ({ movies, getPage, pageCount }) => {
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
      {movies.length?(<PaginationMoveies getPage={getPage} pageCount={pageCount} />):null}
    </Row>
  );
};
