import { createSlice } from "@reduxjs/toolkit";
import { getChairsFetch }  from "../../app/api";


const initialState = {
    chairs:  []
};

const chairsSlice = createSlice ({
    name: "chairs",
    initialState,
    reducers: {
        getChairs: (state, action) => {
            state.chairs = action.payload;
        }
    }

})

export const getChairsMiddleware = (id) => async (dispatch) => {
    try {
        const data = await getChairsFetch(id) 
        dispatch(getChairs(data));
    } catch (error) {
        error
    }
}

export const {getChairs} = chairsSlice.actions;
export default chairsSlice.reducer;