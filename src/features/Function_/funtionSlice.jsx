import { createSlice, current } from "@reduxjs/toolkit";
import { functionFetch, reserveFetch } from "../../app/api";

const initialState = {
  function_: {},
  desiredTickets: 0,
  totalMount: 0,
  availableTickets: 0,
  numselectedIdSeats: 0,
  selectedIdSeats: [],
  selectedSeats: [],
  purchaseSummary: {},
  reservationDetails: {
    functionChairs: [],
    idFunMov: undefined,
  },
};

const functionSlice = createSlice({
  name: "function_",
  initialState,
  reducers: {
    setFunction_: (state, action) => {
      state.function_ = action.payload;
      state.reservationDetails.idFunMov =
        action.payload.listFunctionMovie[0].id;
    },
    addSeat: (state) => {
      if (state.availableTickets > state.desiredTickets){
        state.desiredTickets += 1;
        state.totalMount =  state.function_.priceTicket * state.desiredTickets;
      }
    },
    subtractSeat: (state) => {
      if (state.desiredTickets > 0) {
        state.desiredTickets -= 1;
        state.totalMount =  state.function_.priceTicket * state.desiredTickets;
      }
    },
    getAvailableTickets: (state) => {
      state.availableTickets = state.function_.functionChairs.filter(
        (el) => el.available == true
      ).length;
    },
    cleardesiredTickets: (state) => {
      state.desiredTickets = 0;
      state.totalMount = 0;
    },

    clearSlice: (state) => {
      state.function_ = {},
      state.availableTickets = 0,
      state.selectedIdSeats = [],
      state.selectedSeats = [],
      state.purchaseSummary = {},
      state.reservationDetails = {
        functionChairs: [],
        idFunMov: undefined,
      };
    },

    setDesiredSeats: (state, action) => {
      state.numselectedIdSeats = action.payload;
    },
    setIdSeats: (state, action) => {
      if (state.numselectedIdSeats > 0) {
        state.numselectedIdSeats -= 1;
        state.reservationDetails.functionChairs.push(action.payload.idSeat);
        state.selectedIdSeats.push(action.payload.idSeat);
        state.selectedSeats.push(action.payload.numSeat);
      } else {
        console.log("te jodiste hermano");
      }
    },
    removeIdSeats: (state, action) => {
      if (state.numselectedIdSeats >= 0) {
        state.numselectedIdSeats += 1;
        state.reservationDetails.functionChairs = state.reservationDetails.functionChairs.filter((el) => el != action.payload.idSeat);
        state.selectedIdSeats = state.selectedIdSeats.filter((el) => el != action.payload.idSeat);
        ///
        state.selectedSeats = state.selectedSeats.filter((el) => el != action.payload.numSeat);
      } else {
      }
    },
    setPurchaseSummary: (state, action) => {
      state.purchaseSummary = action.payload;
    },
  },
});

export const functionFetchMiddleware = (id) => async (dispatch) => {
  try {
    const data = await functionFetch(id);
    dispatch(setFunction_(data));
    dispatch(getAvailableTickets());
  } catch (error) {
    throw error;
  }
};

export const reserveFetchMiddleware = ({reservationDetails}) => async (dispatch) => {
  try {
    const data = await reserveFetch(reservationDetails);
    dispatch(setPurchaseSummary(data));
    // console.log(data);
  } catch (error) {
    throw error;
  }
};

export const {
  setFunction_,
  addSeat,
  subtractSeat,
  getAvailableTickets,
  cleardesiredTickets,
  clearSlice,
  setDesiredSeats,
  setIdSeats,
  removeIdSeats,
  setFunctionMov,
  setPurchaseSummary,
} = functionSlice.actions;

export default functionSlice.reducer;
