import React, {Fragment, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {setCityThunk, setPostThunk, setFilterDepartment} from "../../../store/departament/actions";
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';

function FormDepartment() {
    const {allSearchCity, postDepartment, filterPostDepartment} = useSelector(state => state.departmentInfo);
    const dispatch = useDispatch();

    const searchCity = useCallback((e) => {
        dispatch(setCityThunk(e.target.value));
    }, [])

    const getDepartment = useCallback(({Description}) => {
        dispatch(setPostThunk(Description));
    }, [allSearchCity]);

    useEffect(() => {
        dispatch(setFilterDepartment(postDepartment))
    }, [postDepartment]);

    const selectValue = (e) => {
        let filterPostDepartment = e.target.value === 'all'
            ? postDepartment
            : postDepartment.filter((item) => item.CategoryOfWarehouse === e.target.value);
        dispatch(setFilterDepartment(filterPostDepartment))
    }


    return (
        <div>

            <DatalistInput
                placeholder="Київ"
                label="Введіть назву міста"
                onChange={(e) => searchCity(e)}
                onSelect={(item) => getDepartment(item.description)}
                style={{maxWidth: '400px', marginBottom: '20px'}}
                items={
                    allSearchCity.map((item, i) => {
                        return {id: i, value: `${item.Description}, ${item.AreaDescription}`, description: item}
                    })
                }
            />

            {postDepartment.length > 0 ? (
                <Fragment>
                    <p style={{marginBottom: '0'}}>Виберіть тип відділення</p>
                    <select onChange={e => selectValue(e)} defaultValue='all' style={{marginBottom: '20px'}}>
                        <option value={'Branch'}>Відділення</option>
                        <option value={'Postomat'}>Поштомати</option>
                        <option value={'all'}>Всі варіанти</option>
                    </select>
                    <DatalistInput
                        placeholder="номер відділеня або вулиця"
                        label="Введіть номер відділення або вулицю"
                        style={{maxWidth: '500px'}}
                        items={
                            filterPostDepartment.map((item, i) => {
                                return {id: i, value: item.Description}
                            })
                        }
                    />
                </Fragment>
            ) : null}

        </div>

    );
}

export default FormDepartment;