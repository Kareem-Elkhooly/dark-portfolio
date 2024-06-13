<<<<<<< HEAD
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const fetchEnInfos = createAsyncThunk(
    "enInfosSlice/fetchEnInfos",
    () => {
        return axios
        .get("https://dark-portfolio-api.onrender.com/api/en-info")
        .then((res)=> res.data)
    }
) 

const enInfosSlice = createSlice({
    initialState,
    name: "enInfosSlice",
    extraReducers: (builder) => {
        builder.addCase(fetchEnInfos.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchEnInfos.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchEnInfos.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        });
    }
})

=======
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const fetchEnInfos = createAsyncThunk(
    "enInfosSlice/fetchEnInfos",
    () => {
        return axios
        .get("https://dark-portfolio-api.onrender.com/api/en-info")
        .then((res)=> res.data)
    }
) 

const enInfosSlice = createSlice({
    initialState,
    name: "enInfosSlice",
    extraReducers: (builder) => {
        builder.addCase(fetchEnInfos.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchEnInfos.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchEnInfos.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        });
    }
})

>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
export default enInfosSlice.reducer;