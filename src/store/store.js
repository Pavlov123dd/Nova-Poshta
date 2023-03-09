import {configureStore, combineReducers} from '@reduxjs/toolkit'

import list from './home/reducer'

const rootReducer = combineReducers({list})

const store = configureStore({
    reducer: rootReducer
});
export default store;