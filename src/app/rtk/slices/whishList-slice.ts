

import Product from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";


// Safe initialization of initial state
const initialState: Product[] = (() => {
  try {
    const storedWhishList = localStorage.getItem("whishList");
    return storedWhishList ? JSON.parse(storedWhishList) : [];
  } catch (error) {
    console.error("Error parsing localStorage whishList:", error);
    return [];
  }
})();

const whishLishSlice = createSlice({
  name: "whishLishSlice",
  initialState,
  reducers: {
    addToWhishList: (state, action) => {
      const productCopy = state.find(
        (product: Product) => product.asin === action.payload.asin
      );
      if (!productCopy) {
        state.push(action.payload);
        localStorage.setItem("whishList", JSON.stringify(state));
      }
    },
    clearWhishList: () => {
      localStorage.removeItem("whishList");
      return [];
    },
  },
});

export const { addToWhishList, clearWhishList } = whishLishSlice.actions;
export default whishLishSlice.reducer;
