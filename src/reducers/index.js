/* eslint-disable import/no-anonymous-default-export */
import { CLEAR_ROVER_PHOTOS, FETCH_ROVERS, FETCH_ROVER_PHOTOS } from '../constants/actionTypes';

export default (state = { rovers: [], photos: [] }, action) => {
    switch (action.type) {
        case FETCH_ROVERS:
            console.log('Fetching all rovers...');
            return {
                ...state,
                rovers: action.payload.rovers
            };
        case FETCH_ROVER_PHOTOS:
            console.log('Fetching Rover Photos...');
            return {
                ...state,
                photos: [ ...state.photos, ...action.payload.photos ]
            };
        case CLEAR_ROVER_PHOTOS:
            console.log("Clearing Rover Photos From State...");
            return {
                ...state,
                photos: []
            }
        default:
            return state;
    }
}