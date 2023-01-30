import { createStore ,applyMiddleware} from "redux";
import {MoviesReducer} from "../reducer/MoviesReducer"
import  thunk  from 'redux-thunk';
//1.create store and use middleware to solve async awaite from api
export const store = createStore(MoviesReducer,applyMiddleware(thunk));
