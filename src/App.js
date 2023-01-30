import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { NavBar } from "./components/NavBar";
import { FilmList } from "./components/FilmList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieDetails } from "./components/MovieDetails";

export const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FilmList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
};
