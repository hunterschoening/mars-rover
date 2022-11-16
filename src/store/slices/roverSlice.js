import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api';

export const getRovers = createAsyncThunk(
    'rover/getAllRovers',
    async () => {
        const { data } = await api.fetchRovers();
        return data;
    }
);

export const getRoverPhotos = createAsyncThunk(
    'rover/getRoverPhotos',
    async ({ roverName, page, date }) => {
        const { data } = await api.fetchRoverPhotos(roverName, page, date);
        return data;
    }
);

const initialState = {
    rovers: [],
    photos: [],
}

const roverSlice = createSlice({
    name: 'rover',
    initialState,
    reducers: {
        clearRoverPhotos(state) {
            state.photos = [];
        },
    },
    extraReducers: {
        [getRovers.pending]: (state, action) => {
            console.log("Requesting Rover Data...");
        },
        [getRovers.fulfilled]: (state, action) => {
            console.log("Rover Data Recieved...");
            state.rovers = action.payload.rovers;
        },
        [getRovers.rejected]: (state, action) => {
            console.log("Rover Data Request Failed...");
        },
        [getRoverPhotos.pending]: (state, action) => {
            console.log("Requesting Rover Pictures...");
        },
        [getRoverPhotos.fulfilled]: (state, action) => {
            console.log("Rover Pictures Recieved...");
            state.photos = [ ...state.photos, ...action.payload.photos ];
        },
        [getRoverPhotos.rejected]: (state, action) => {
            console.log("Rover Picture Request Failed...");
        },
    }
})

export const { clearRoverPhotos } = roverSlice.actions;

export default roverSlice.reducer;