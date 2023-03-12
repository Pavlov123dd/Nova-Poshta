import {
    ACTION_SET_SEARCH_CITY,
    ACTION_SET_POST_DEPARTMENT,
    ACTION_SET_FILTER_DEPARTMENT
} from "./actions";

const INITIAL_STATE = {
    allSearchCity: [],
    postDepartment: [],
    filterPostDepartment: [],
};

const reducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case ACTION_SET_SEARCH_CITY:
            return {...state, allSearchCity: payload};
        case ACTION_SET_POST_DEPARTMENT:
            return {...state, postDepartment: payload};
        case ACTION_SET_FILTER_DEPARTMENT:
            return {...state, filterPostDepartment: payload};
        default:
            return state
    }
};

export default reducer;