import { createSlice } from "@reduxjs/toolkit";
import initialState from "./state";

export const storeSlice = createSlice({
    name: "sample",
    initialState,
    reducers: {}
})

export const { } = storeSlice.actions;

export default storeSlice.reducer;