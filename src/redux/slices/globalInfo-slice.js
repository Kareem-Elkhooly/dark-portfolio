import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const fetchGlobalInfos = createAsyncThunk(
    "globalInfosSlice/fetchGlobalInfos",
    () => {
        return axios
        .get("https://dark-portfolio-api.onrender.com/api/info")
        .then((res)=> res.data)
    }
) 

const globalInfosSlice = createSlice({
    initialState,
    name: "globalInfosSlice",
    extraReducers: (builder) => {
        builder.addCase(fetchGlobalInfos.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchGlobalInfos.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchGlobalInfos.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        });
    }
})

export default globalInfosSlice.reducer;