import {getAllCity} from "../../services/cityServices";
import {getPostDepartment} from "../../services/postDepartmentServices"


export const ACTION_SET_SEARCH_CITY = 'ACTION_SET_SEARCH_CITY';
const setCity = (city) => ({type: ACTION_SET_SEARCH_CITY, payload: city});

export const setCityThunk = (searchCity) => {

    return async (dispatch) => {
        dispatch(setCity(await getAllCity(searchCity)));
    }
};


export const ACTION_SET_POST_DEPARTMENT = 'ACTION_SET_POST_DEPARTMENT';
const setPostDepartment = (postDepartment) => ({type: ACTION_SET_POST_DEPARTMENT, payload: postDepartment});
export const setPostThunk = (item) => {
    return async (dispatch) => {

        dispatch(setPostDepartment(await getPostDepartment(item)));

    }
};

export const ACTION_SET_FILTER_DEPARTMENT = 'ACTION_SET_FILTER_DEPARTMENT';

export const setFilterDepartment = (postDepartment) => ({type: ACTION_SET_FILTER_DEPARTMENT, payload: postDepartment});




