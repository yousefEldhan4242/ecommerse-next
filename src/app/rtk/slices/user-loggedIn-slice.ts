import { createSlice } from "@reduxjs/toolkit";

const userLoggendInSlice = createSlice({
  initialState: localStorage.getItem("isLoggedIn") || false,
  name: "userLoggedInSlice",
  reducers: {
    setUserLoggedState: (state, action) => {
      localStorage.setItem("isLoggedIn", action.payload);
      return action.payload;
    },
    logOut: () => {
      localStorage.removeItem("isLoggedIn");
      return false;
    },
  },
});

export const { setUserLoggedState, logOut } = userLoggendInSlice.actions;
export default userLoggendInSlice.reducer;
