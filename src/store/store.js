import { combineReducers, configureStore } from '@reduxjs/toolkit';

import rover from './slices/roverSlice';

const rootReducer = combineReducers({
    rover,
});

const store = configureStore({ reducer: rootReducer });

export default store;
