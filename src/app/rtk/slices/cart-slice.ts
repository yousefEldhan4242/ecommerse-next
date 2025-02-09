

import Product from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

// Safely parse localStorage data
const getCartFromLocalStorage = (): Product[] => {
  try {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart).filter((product: Product) => product.quantity !== 0) : [];
  } catch (error) {
    console.error("Error parsing cart from localStorage:", error);
    return [];
  }
};

// Safely update localStorage
const saveCartToLocalStorage = (state: Product[]) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      const foundProduct = state.find((product: Product) => product.asin === action.payload.asin);
      if (!foundProduct) {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state);
    },
    increaseQuantityBy1: (state, action) => {
      const foundProduct = state.find((product: Product) => product.asin === action.payload.asin);
      if (foundProduct) {
        foundProduct.quantity++;
        saveCartToLocalStorage(state);
      }
    },
    increaseQuantityBySpecificQunatity: (state, action) => {
      const foundProduct = state.find((product: Product) => product.asin === action.payload.asin);
      if (foundProduct) {
        if (foundProduct.quantity === 1) {
          foundProduct.quantity = action.payload.quantity;
        } else {
          foundProduct.quantity += action.payload.quantity;
        }
        saveCartToLocalStorage(state);
      }
    },
    decreaseQuantity: (state, action) => {
      const foundProduct = state.find((product: Product) => product.asin === action.payload.asin);
      if (foundProduct && foundProduct.quantity > 0) {
        foundProduct.quantity--;
        saveCartToLocalStorage(state);
      }
    },
    updateCart: () => {
      const updatedState = getCartFromLocalStorage();
      return updatedState;
    },
    clearCart: () => {
      localStorage.removeItem("cart");
      return [];
    },
  },
});

export const {
  addToCart,
  decreaseQuantity,
  updateCart,
  clearCart,
  increaseQuantityBy1,
  increaseQuantityBySpecificQunatity,
} = cartSlice.actions;
export default cartSlice.reducer;
