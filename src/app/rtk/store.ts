import { configureStore } from "@reduxjs/toolkit";
import whishListSlice from "./slices/whishList-slice";
import cartSlice from "./slices/cart-slice";
import userLoggedInSlice from "./slices/user-loggedIn-slice";
import accountSlice, { Account } from "./slices/account-slice";
import Product from "@/interfaces";
import dataSlice from "./slices/data-slice"
import ProductsLoadingSlice  from "./slices/products-loading-slice";

export interface State {
  whishList: Product[];
  cart: Product[];
  loggedIn: boolean;
  account:Account
  data:Product[]
  productsLoading:boolean
}

export const store = configureStore({
  reducer: {
    whishList: whishListSlice,
    cart: cartSlice,
    loggedIn: userLoggedInSlice,
    account: accountSlice,
    data:dataSlice,
    productsLoading: ProductsLoadingSlice
  },
});

export type AppDispatch = typeof store.dispatch;