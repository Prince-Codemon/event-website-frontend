import { createSlice } from "@reduxjs/toolkit";
import jwtdecode from "jwt-decode";

const fetchToken = () => {
  const token = localStorage.getItem("user");
  if (token) {
    const decodedToken = jwtdecode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      localStorage.removeItem("user");
      return null;
    } else {
      return decodedToken;
    }
  } else {
    return null;
  }
};
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: fetchToken() ? true : false,
    userName: fetchToken() ? fetchToken().name : "",
    admin: fetchToken() ? JSON.parse(fetchToken().admin) : false,
    userId: fetchToken() ? fetchToken()._id : "",
    userToken: fetchToken() ? localStorage.getItem("user") : "",
  },
  reducers: {
    setLogin: (state, action) => {
      const { _id, name } = jwtdecode(action.payload.token);
      state.login = true;
      state.userName = name;
      state.userId = _id;
      state.admin = JSON.parse(action.payload.admin);
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.login = false;
      state.userName = "";
      state.userId = "";
      state.admin = false;
    },
  },
});

export const { setLogin, logout } = authSlice.actions;
export default authSlice.reducer;
