import React, {Fragment, useEffect, useCallback} from 'react';
import './style.sass'
import {useSelector, useDispatch} from "react-redux";
import {setCityThunk, setPostThunk, setFilterDepartment} from "../../../store/departament/actions";
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

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
        <Box className='box-wrapper'>

            <DatalistInput
                placeholder="Київ"
                label="Введіть назву міста"
                onChange={(e) => searchCity(e)}
                onSelect={(item) => getDepartment(item.description)}
                style={{maxWidth: '400px', marginBottom: '20px', color: '#2979ff'}}

                items={
                    allSearchCity.map((item, i) => {
                        return {id: i, value: `${item.Description}, ${item.AreaDescription}`, description: item}
                    })
                }
            />

            {postDepartment.length > 0 ? (
                <Fragment>
                    <Typography variant="button" display="block" gutterBottom sx={{color: '#2979ff'}}>Виберіть тип
                        відділення</Typography>
                    <Select onChange={e => selectValue(e)} defaultValue='all'
                            style={{marginBottom: '20px'}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                    >
                        <MenuItem value={'Branch'}>Відділення</MenuItem>
                        <MenuItem value={'Postomat'}>Поштомати</MenuItem>
                        <MenuItem value={'all'}>Всі варіанти</MenuItem>
                    </Select>

                    <DatalistInput
                        placeholder="номер відділеня або вулиця"
                        label="Натисніть та введіть відділення"
                        style={{maxWidth: '400px', color: '#2979ff'}}
                        items={
                            filterPostDepartment.map((item, i) => {
                                return {id: i, value: item.Description}
                            })
                        }
                    />
                </Fragment>
            ) : null}

        </Box>

    );
}

export default FormDepartment;