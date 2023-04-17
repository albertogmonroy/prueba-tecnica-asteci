import { configureStore } from "@reduxjs/toolkit";
import { rootSlice } from "../slice/rootSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: rootSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      inmutableCheck: false,
    }),
  devTools: true,
});

export const useAppDispatch = () => useDispatch();
