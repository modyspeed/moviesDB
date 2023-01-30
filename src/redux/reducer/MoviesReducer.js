import { allMovies } from "./../types/MoviesTypes";
//2.create reducer
const initialValue = { movies: [],pages:0 };
export const MoviesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case allMovies:
      return { movies: action.data,pages:action.pageCount };

    default:
      return state;
  }
};
