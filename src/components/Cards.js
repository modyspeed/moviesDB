import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cards = ({ mov }) => {
  return (
    <Link to={`/movie/${mov.id}`}>
      <Card className="bg-dark text-white  cardList">
        <Card.Img
          src={"https://image.tmdb.org/t/p/w500" + mov.poster_path}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <Card.ImgOverlay className="cardMove">
          <Card.Title>{mov.original_title}</Card.Title>
          <Card.Text>{mov.overview}</Card.Text>
          <Card.Text>تاريخ الاصدار: {mov.release_date}</Card.Text>
          <Card.Text>عدد المقيمين :{mov.vote_count}</Card.Text>
          <Card.Text>التقييم:{mov.vote_average}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );
};
