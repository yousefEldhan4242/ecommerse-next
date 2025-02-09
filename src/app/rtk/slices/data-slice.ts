import Product from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";




const initialState:Product[] = []

const dataSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setData: (state, action) => {
      return action.payload
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
