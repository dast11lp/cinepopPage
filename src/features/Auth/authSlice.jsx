import { createSlice } from "@reduxjs/toolkit";
import { loginFetch, registerFetch } from "../../app/api";

const initialState = {
  userLogin: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.userLogin = action.payload;
      localStorage.setItem("user", JSON.stringify(state.userLogin));
      localStorage.setItem("token", action.payload.Authorization);
    },
    setLogOut: (state, action) => {
      state.userLogin = {};
      localStorage.removeItem("user"), localStorage.removeItem("token");
    },
    getLogin: (state, action) => {
      const user = JSON.parse(localStorage.getItem("user"));
      state.userLogin = { ...user, token: localStorage.getItem("token") };
    },
  },
});

export const login = (user, navigate, previousPage) => async (dispatch) => {
  try {
    const data = await loginFetch(user);
    dispatch(setLogin(data));
    
    if (previousPage) {
      navigate(-1);
    } else {
      navigate("/");
    }
  } catch (error) {
    throw error;
  }
};

export const registerFetchMiddleware = (body) => async (dispatch) => {
  try {
    const data = await registerFetch(body);
    console.log(data);
    dispatch;
  } catch (error) {}
};

export const { setLogin, setLogOut, getLogin } = authSlice.actions;

export default authSlice.reducer;
