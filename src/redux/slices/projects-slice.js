import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const fetchProjects = createAsyncThunk(
    "projectsSlice/fetchProjects",
    () => {
        return axios
        .get("https://dark-portfolio-api.onrender.com/api/projects")
        .then((res)=> res.data)
    }
) 

const projectsSlice = createSlice({
    initialState,
    name: "projectsSlice",
    extraReducers: (builder) => {
        builder.addCase(fetchProjects.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchProjects.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchProjects.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        });
    }
})

export default projectsSlice.reducer;