import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const par = useParams();
  //get  movie details
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${par.id}?api_key=efe12565056c4ad02af546e1f380bb99&language=ar`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <>
      <Card className=" flex-row my-3">
        <Card.Img
          style={{ width: "180px" }}
          variant="right"
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt="poster"
        />
        <Card.Body>
          <Card.Title>{movie.original_title} </Card.Title>
    
          <Card.Text>تاريخ الاصدار: {movie.release_date}</Card.Text>
          <Card.Text>عدد المقيمين :{movie.vote_count}</Card.Text>
          <Card.Text>التقييم:{movie.vote_average}</Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card className="text-center">
        <Card.Header>قصة الفيلم</Card.Header>
        <Card.Body>
          <Card.Text>{movie.overview}</Card.Text>
          <a href={movie.homepage}>
            <Button className=" m-2" variant="primary">
              مشاهدة
            </Button>
          </a>
          <Link to="/">
            <Button className=" m-2" variant="primary">
              عودة للرئيسية
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};
