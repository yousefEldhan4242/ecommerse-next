"use client";
import React from "react";
import { store } from "../../rtk/store";
import { Provider } from "react-redux";

const ReduxStoreProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
};

export default ReduxStoreProvider;
