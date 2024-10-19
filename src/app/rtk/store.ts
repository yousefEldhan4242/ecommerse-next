import { configureStore } from "@reduxjs/toolkit";
import prodcutsSlice from "./slices/prodcutsSlice";
import whishListSlice from "./slices/whishList-slice";
import cartSlice from "./slices/cart-slice";
import userLoggedInSlice from "./slices/user-loggedIn-slice";
import Product from "@/interfaces";

export interface State {
  products: Product[];
  whishList: object[];
  cart: Product[];
  loggedIn: boolean;
}

export const store = configureStore({
  reducer: {
    products: prodcutsSlice,
    whishList: whishListSlice,
    cart: cartSlice,
    loggedIn: userLoggedInSlice,
  },
});
