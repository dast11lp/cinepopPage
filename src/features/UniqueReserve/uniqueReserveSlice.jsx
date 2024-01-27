import { createSlice } from "@reduxjs/toolkit";
import { getReservationByPages, getReservationIds, getUniqueReservation } from "../../app/api";

const initialState = {
  idReservations: [],
  reservations: {},
};

const uniqueReserveSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setIdReservations: (state, action) => {
      state.idReservations = action.payload;
    },
    setReservation: (state, action) => {
      state.reservations = action.payload;
    },
  },
});

export const getReservationIdsMiddleware = (idUser) => async (dispatch) => {
    try {
      const data = await getReservationIds(idUser);
      dispatch(setIdReservations(data));
    } catch (error) {
      
    }
}

export const getUniqueReservationMiddleware = (idUser, idReserve) => async (dispatch) => {
    const data = await getUniqueReservation(idUser, idReserve);
    dispatch(setReservation(data));
  };

export const getReservationByPagesMiddleware = (page, userId) => async (dispatch) => {
  const data = await getReservationByPages(page, userId);
  dispatch(setReservation(data));
}

export const { setReservation, setIdReservations } = uniqueReserveSlice.actions;
export default uniqueReserveSlice.reducer;
