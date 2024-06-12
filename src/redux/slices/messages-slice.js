import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const fetchMessages = createAsyncThunk(
    "messagesSlice/fetchMessages",
    () => {
        return axios
        .get("https://dark-portfolio-api.onrender.com/api/message", {
            headers: {
                "token": `${sessionStorage.getItem("token")}`,
            }
        })
        .then((res)=> res.data)
    }
) 

const messagesSlice = createSlice({
    initialState,
    name: "messagesSlice",
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchMessages.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        });
    }
})

export default messagesSlice.reducer;