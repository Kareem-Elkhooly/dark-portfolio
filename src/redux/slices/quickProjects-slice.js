<<<<<<< HEAD
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const fetchQuickProjects = createAsyncThunk(
    "quickprojectsSlice/fetchQuickProjects",
    () => {
        return axios
        .get("https://dark-portfolio-api.onrender.com/api/quickProjs")
        .then((res)=> res.data)
    }
) 

const quickprojectsSlice = createSlice({
    initialState,
    name: "quickprojectsSlice",
    extraReducers: (builder) => {
        builder.addCase(fetchQuickProjects.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchQuickProjects.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchQuickProjects.rejected, (state, action) => {
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

export const fetchQuickProjects = createAsyncThunk(
    "quickprojectsSlice/fetchQuickProjects",
    () => {
        return axios
        .get("https://dark-portfolio-api.onrender.com/api/quickProjs")
        .then((res)=> res.data)
    }
) 

const quickprojectsSlice = createSlice({
    initialState,
    name: "quickprojectsSlice",
    extraReducers: (builder) => {
        builder.addCase(fetchQuickProjects.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchQuickProjects.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchQuickProjects.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        });
    }
})

>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
export default quickprojectsSlice.reducer;