import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-hot-toast";
import { authSelectors } from "redux/auth";
import { useSelector } from "react-redux";

axios.defaults.baseURL = "https://travel-app-api.glitch.me/api/v1";

const token = {
  set(currentToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${currentToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const allTrip = createAsyncThunk(
  "trip/alltrip",
  async (credentials, thunkAPI) => {
    token.set(credentials)
    try {
      const { data } = await axios.get("/trips");
      console.log(data);
      return data;
    } catch (error) {
      toast.error("Bugs on BackEnd");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// const login: any = createAsyncThunk(
//   "auth/login",
//   async (credentials: RegData, thunkAPI) => {
//     try {
//       const { data } = await axios.post("/auth/sign-in", credentials);
//       toast.success("You have logged in successfully");
//       return data;
//     } catch (error) {
//       toast.error("Bugs on BackEnd");
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// const logout: any = createAsyncThunk("/auth/logout", async (__, thunkAPI) => {
//   try {
//     token.unset();
//     toast.success("Your session is closed", { duration: 4000 });
//   } catch (error) {
//     toast.error("Bugs on BackEnd");
//     return thunkAPI.rejectWithValue(error);
//   }
// });

// const fetchCurrentUser: any = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkAPI) => {
//     const state: any = thunkAPI.getState();
//     const persistedToken = state.auth.token;
//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue(null);
//     }
//     token.set(persistedToken);
//     try {
//       const { data } = await axios.get("/auth/authenticated-user");
//       toast.success("Your session has been restored");
//       return data;
//     } catch (error) {
//       toast.error("Bugs on BackEnd. Pleas sign-in again");
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

const authOperations = {
  allTrip,
  // register,
  // logout,
  // login,
  // fetchCurrentUser,
};
export default authOperations;
