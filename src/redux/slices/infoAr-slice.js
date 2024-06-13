import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const fetchArInfos = createAsyncThunk(
    "arInfosSlice/fetchArInfos",
    () => {
        return axios
        .get("https://dark-portfolio-api.onrender.com/api/ar-info")
        .then((res)=> res.data)
    }
) 

const arInfosSlice = createSlice({
    initialState,
    name: "arInfosSlice",
    extraReducers: (builder) => {
        builder.addCase(fetchArInfos.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchArInfos.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchArInfos.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        });
    }
})

export default arInfosSlice.reducer;