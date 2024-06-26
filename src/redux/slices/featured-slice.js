import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const fetchFeatured = createAsyncThunk(
    "featuredSlice/fetchFeatured",
    () => {
        return axios
        .get("https://dark-portfolio-api.onrender.com/api/featured")
        .then((res)=> res.data)
    }
) 

const featuredSlice = createSlice({
    initialState,
    name: "featuredSlice",
    extraReducers: (builder) => {
        builder.addCase(fetchFeatured.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchFeatured.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchFeatured.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        });
    }
})

export default featuredSlice.reducer;