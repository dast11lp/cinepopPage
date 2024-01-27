import { createSlice } from "@reduxjs/toolkit";
import { ListingMoviesFetch } from "../../app/api";

const initialState = {
  listingMovies: [],
};

const ListingMoviesSlice = createSlice({
  name: "listingMovies",
  initialState,
  reducers: {
    getMovies: (state, action) => {
        state.listingMovies = action.payload
    },
  },
});



export const getMoviesMiddleware = () => async (dispatch) => {
    try {
      const data = await ListingMoviesFetch();
      dispatch(getMovies(data));
    }catch(error) {
      throw error
    }
    
}

export const {getMovies} = ListingMoviesSlice.actions;

export default ListingMoviesSlice.reducer;


