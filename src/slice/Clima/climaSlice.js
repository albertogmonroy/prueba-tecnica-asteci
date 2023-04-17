import { createSlice } from "@reduxjs/toolkit";

export const climaSlice = createSlice({
  name: "clima",
  initialState: {
    dataClima: [],
    climaSelected: null,
    infoClima: null,
  },
  reducers: {
    onLoadDataClima: (state, { payload }) => {
      state.dataClima = payload;
    },
    onSelectClima: (state, { payload }) => {
      state.climaSelected = payload;
    },
    onLoadInfoCLima: (state, { payload }) => {
      state.infoClima = payload;
    },
  },
});
export const { onLoadDataClima, onSelectClima, onLoadInfoCLima } =
  climaSlice.actions;
