

import { createSlice } from "@reduxjs/toolkit";

// Helper to safely parse `isLoggedIn` from localStorage
const getIsLoggedInFromLocalStorage = (): boolean => {
  try {
    if (localStorage.getItem("email-or-phone-number") && localStorage.getItem("password")){

      return true
    }else{
      return false;
    }
  } catch (error) {
    console.error("Error reading isLoggedIn from localStorage:", error);
    return false;
  }
};

// Helper to safely set `isLoggedIn` in localStorage
// const setIsLoggedInToLocalStorage = (value: boolean) => {
//   try {
//     localStorage.setItem("isLoggedIn", value.toString());
//   } catch (error) {
//     console.error("Error saving isLoggedIn to localStorage:", error);
//   }
// };

const userLoggedInSlice = createSlice({
  name: "userLoggedInSlice",
  initialState: getIsLoggedInFromLocalStorage() ?? false,
  reducers: {
    // setUserLoggedState: (state, action: { payload: boolean }) => {
    //   const newState = action.payload;
    //   setIsLoggedInToLocalStorage(newState);
    //   return newState;
    // },
    logOut: () => {
      try {
        localStorage.removeItem("email-or-phone-number");
        localStorage.removeItem("password");
      } catch (error) {
        console.error("Error removing isLoggedIn from localStorage:", error);
      }
      return false;
    },
  },
});

export const {  logOut } = userLoggedInSlice.actions;
export default userLoggedInSlice.reducer;
