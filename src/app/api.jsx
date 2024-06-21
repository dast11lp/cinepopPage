import { createAsyncThunk } from "@reduxjs/toolkit";
import {Config} from "./config";

export const loginFetch = async (user) => {
  try {
    const request = await fetch(`${Config.hostname}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if(request.status == 401) {
      throw request.status
    }

    else if(request.status == 500) {
      throw request.status
    }

    const data = await request.json();

    if(request.status == 200) {
      return data;
    }
   
  } catch (error) {
    
    throw error;
  }
};


export const ListingMoviesFetch = async () => {
  try {
    const request = await fetch(`${Config.hostname}movies/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const listFuncMovieFetch = async (id) => {
  try {
    const request = await fetch(`${Config.hostname}function-movie/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const functionFetch = async (id) => {
  try {
    const request = await fetch(`${Config.hostname}functions/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    const data = await request.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const reserveFetch = async (body) => {
  const idUser = JSON.parse(localStorage.getItem("user"))?.userData?.idUser;

  try {
    const request = await fetch(`${Config.hostname}reservation/user/${idUser}/reserve-function-movie/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(body)
    });
    const data = await request.json();
    return data;
    
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const registerFetch = async(body) => {
  try {
    const request = await fetch(`${Config.hostname}auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    });
    const data = await request.json();
    return data
  } catch (error) {
    console.error(error);
    throw error
  }
}

export const getUniqueReservation = async (idUser, idReservation)  => {
  try {
    const request = await fetch (`${Config.hostname}reservation/user/${idUser}/getReserve/${idReservation}`, {
      method: "GET",
      headers: {
        "Content_type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    const data = request.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error
  }
}


export const getReservationIds = async (idUser)  => {
  try {
    const request = await fetch (`${Config.hostname}reservation/user/${idUser}/getMyReserveIds`, {
      method: "GET",
      headers: {
        "Content_type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    const data = request.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error
  }
}

export const getReservationByPages = async (page = 1 , userId)  => {
  try {
    const request = await fetch (`${Config.hostname}reservation/user/${userId}/getReservesPages?page=${page}`, {
      method: "GET",
      headers: {
        "Content_type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    const data = request.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error
  }
}
