import {
    ACTION_SET_ALL_TTN,
    ACTION_SET_INFO,
    ACTION_SET_TTN
} from "./actions";

const INITIAL_STATE = {
    parcelInformation: [],
    postNumber: '',
    allPostNumber: []
};

const reducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case ACTION_SET_INFO:
            return {...state, parcelInformation: payload}
        case ACTION_SET_TTN:
            return {...state, postNumber: payload}
        case ACTION_SET_ALL_TTN:
            return {...state, allPostNumber: payload}
        default:
            return state
    }
};


export default reducer;