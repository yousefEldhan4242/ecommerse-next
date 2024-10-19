import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "ProductsSlice/fetchProducts",
  async () => {
    const res = await fetch(
      "https://mocki.io/v1/d1870809-b119-45eb-b174-581fdedcff5c"
    );
    const data = await res.json();
    return data;
  }
);

const ProductsSlice = createSlice({
  initialState: JSON.parse(localStorage.getItem("products") as string) || [],
  name: "ProductsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      localStorage.setItem("products", JSON.stringify(action.payload));
      return action.payload;
    });
  },
});

export const {} = ProductsSlice.actions;

export default ProductsSlice.reducer;
