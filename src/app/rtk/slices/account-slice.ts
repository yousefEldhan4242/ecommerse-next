
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Account {
  firstName: string;
  secondName: string;
  email: string;
  address: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

// Helper function to get the initial state from localStorage
const getInitialAccountState = () => {
  try {
    const storedState = localStorage.getItem("account");
    return storedState ? JSON.parse(storedState) : {};
  } catch (error) {
    console.error("Error reading account from localStorage:", error);
    return {};
  }
};

// Helper function to save the state to localStorage
const saveAccountToLocalStorage = (state: Account) => {
  try {
    localStorage.setItem("account", JSON.stringify(state));
  } catch (error) {
    console.error("Error saving account to localStorage:", error);
  }
};

const accountSlice = createSlice({
  name: "accountSlice",
  initialState: getInitialAccountState(),
  reducers: {
    addFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
      saveAccountToLocalStorage(state);
    },
    addSecondName: (state, action: PayloadAction<string>) => {
      state.secondName = action.payload;
      saveAccountToLocalStorage(state);
    },
    addEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      saveAccountToLocalStorage(state);
    },
    addAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
      saveAccountToLocalStorage(state);
    },
    addCurrentPassword: (state, action: PayloadAction<string>) => {
      state.currentPassword = action.payload;
      saveAccountToLocalStorage(state);
    },
    addNewPassword: (state, action: PayloadAction<string>) => {
      state.newPassword = action.payload;
      saveAccountToLocalStorage(state);
    },
    addConfirmNewPassword: (state, action: PayloadAction<string>) => {
      state.confirmNewPassword = action.payload;
      saveAccountToLocalStorage(state);
    },
  },
});

export const {
  addFirstName,
  addSecondName,
  addEmail,
  addAddress,
  addCurrentPassword,
  addNewPassword,
  addConfirmNewPassword,
} = accountSlice.actions;

export default accountSlice.reducer;
