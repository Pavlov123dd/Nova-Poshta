import {tracking} from "../../services/postNumberServices";


export const ACTION_SET_INFO = 'ACTION_SET_INFO';
export const setInfo = users => ({type: ACTION_SET_INFO, payload: users});

export const setInfoThunk = (ttn) => {

    return async (dispatch) => {
        dispatch(setInfo(await tracking(ttn)));
    }
};


export const ACTION_SET_TTN = 'ACTION_SET_TTN';
export const setTtn = postNumber => ({type: ACTION_SET_TTN, payload: postNumber});


export const ACTION_SET_ALL_TTN = 'ACTION_SET_ALL_TTN';
export const setAllTtn = postNumber => ({type: ACTION_SET_ALL_TTN, payload: postNumber});



