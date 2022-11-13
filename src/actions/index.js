import { FETCH_ROVERS, FETCH_ROVER_PHOTOS, CLEAR_ROVER_PHOTOS } from '../constants/actionTypes';
import * as api from '../api';

export const getRovers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchRovers();
        dispatch({ type: FETCH_ROVERS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getRoverPhotos = (name, page, date) => async (dispatch) => {
    try {
        const { data } = await api.fetchRoverPhotos(name, page, date);
        dispatch({ type: FETCH_ROVER_PHOTOS, payload: data });
    } catch (error) {
        console.log(error);   
    }
}

export const clearRoverPhotos = () => async ( dispatch ) => {
    try {
        dispatch({ type: CLEAR_ROVER_PHOTOS });
    } catch (error) {
        console.log(error);
    }
}
