import { createSlice } from "@reduxjs/toolkit";




const initialState:boolean = false

const productsLoading = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsLoading: (state,action) => action.payload
  },
});

export const { setProductsLoading } = productsLoading.actions;
export default productsLoading.reducer;
