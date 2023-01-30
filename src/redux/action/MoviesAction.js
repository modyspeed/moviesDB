import { allMovies, moviesApi } from "./../types/MoviesTypes";
import axios from "axios";
export const getAllMovie = () => {
  //make dispatch param to late api response by using high function order 
  return async (dispatch) => {
    const res = await axios.get(moviesApi);
    dispatch({
      type: allMovies,
      data: res.data.results,
      pageCount: res.data.total_pages,
    });
  };
};
export const getAllMovieSearch = (word) => {
  //make dispatch param to late api response by using high function order 
  return async (dispatch) => {
    const res = await axios.get(  `https://api.themoviedb.org/3/search/movie?api_key=efe12565056c4ad02af546e1f380bb99&query=${word}&language=ar`);
    dispatch({
      type: allMovies,
      data: res.data.results,
      pageCount: res.data.total_pages,
    });
  };
};
export const getPaginationMovies = (page) => {
  //make dispatch param to late api response by using high function order 
  return async (dispatch) => {
    const res = await axios.get(   `https://api.themoviedb.org/3/movie/popular?api_key=efe12565056c4ad02af546e1f380bb99&language=ar&page=${page}`);
    dispatch({
      type: allMovies,
      data: res.data.results,
      pageCount: res.data.total_pages,
    });
  };
};
