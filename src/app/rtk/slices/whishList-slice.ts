import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
}

const whishLishSlice = createSlice({
  initialState: JSON.parse(localStorage.getItem("whishList") as string) || [],
  name: "whishLishSlice",
  reducers: {
    addToWhishList: (state, action) => {
      const productCopy = state.find(
        (product: Product) => product.id == action.payload.id
      );
      if (!productCopy) {
        state.push(action.payload);
      }
      localStorage.setItem("whishList", JSON.stringify(state));
    },
    clearWhishList: () => {
      localStorage.removeItem("whishList");
      return [];
    },
  },
});

export const { addToWhishList, clearWhishList } = whishLishSlice.actions;
export default whishLishSlice.reducer;
