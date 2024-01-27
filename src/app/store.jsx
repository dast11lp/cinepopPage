import { configureStore } from "@reduxjs/toolkit";
import auth from '../features/Auth/authSlice';
import listMovies from '../features/ListingMovies/ListingMoviesSlice'
import listFunc from '../features/FunctionsPerMovie/FuntionsPerMovieSlice'
import modal from '../features/Modal/modalSlice'
import function_ from '../features/Function_/funtionSlice'
import reservation  from "../features/UniqueReserve/uniqueReserveSlice";
import previousPath  from "../features/PreviousPath/previousPathSlice";

export const store = configureStore({
    reducer: {
        auth,
        listMovies,
        listFunc,
        modal,
        function_,
        reservation,
        previousPath,
    }
})