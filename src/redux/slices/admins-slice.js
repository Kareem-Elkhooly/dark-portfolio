<<<<<<< HEAD
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const fetchAdmins = createAsyncThunk(
    "adminsSlice/fetchAdmins",
    () => {
        return axios
        .get("https://dark-portfolio-api.onrender.com/api/admin",{
            headers: {
                "token": `${sessionStorage.getItem("token")}`
            }
        })
        .then((res)=> res.data)
    }
) 

const adminsSlice = createSlice({
    initialState,
    name: "adminsSlice",
    extraReducers: (builder) => {
        builder.addCase(fetchAdmins.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchAdmins.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchAdmins.rejected, (state, action) => {
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

export const fetchAdmins = createAsyncThunk(
    "adminsSlice/fetchAdmins",
    () => {
        return axios
        .get("https://dark-portfolio-api.onrender.com/api/admin",{
            headers: {
                "token": `${sessionStorage.getItem("token")}`
            }
        })
        .then((res)=> res.data)
    }
) 

const adminsSlice = createSlice({
    initialState,
    name: "adminsSlice",
    extraReducers: (builder) => {
        builder.addCase(fetchAdmins.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchAdmins.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchAdmins.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        });
    }
})

>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
export default adminsSlice.reducer;