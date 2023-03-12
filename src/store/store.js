import {configureStore, combineReducers} from '@reduxjs/toolkit'

import list from './home/reducer'
import departmentInfo from './departament/reducer'
const rootReducer = combineReducers({list, departmentInfo})

const store = configureStore({
    reducer: rootReducer
});
export default store;