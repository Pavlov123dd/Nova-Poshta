import React, {useEffect} from 'react';
import './style.sass'
import {useSelector, useDispatch} from "react-redux";
import {setAllTtn, setInfo, setInfoThunk, setTtn} from '../../store/home/actions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function FormStatus() {
    const {postNumber} = useSelector(state => state.list);
    const dispatch = useDispatch();

    useEffect(() => {
        (localStorage.length === 0) && localStorage.setItem('allPostNumber', JSON.stringify([]));
        dispatch(setAllTtn(JSON.parse(localStorage.getItem('allPostNumber'))))
    }, []);


    const addLocalStorage = () => {
        let allTtnLocal = JSON.parse(localStorage.getItem('allPostNumber'))
        allTtnLocal = allTtnLocal.concat(postNumber)
        localStorage.setItem('allPostNumber', JSON.stringify(allTtnLocal))
    };

    const submitForm = (e) => {
        e.preventDefault();

        if (postNumber.length > 0)
            if (postNumber.match(/\d{14}/)) {
                dispatch(setInfoThunk(postNumber));
                addLocalStorage();
                dispatch(setAllTtn(JSON.parse(localStorage.getItem('allPostNumber'))));
            } else {
                console.log('error')
            }
    };

    const inputValue = e => {
        dispatch(setTtn((e.target.value).replace(/ /g, '')));

    };

    const clearInput = () => {
        dispatch(setTtn([]));
        dispatch(setInfo([]));
        console.log('clear')
    };


    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={e => submitForm(e)}
            className="wrapper-form"
        >
            <TextField
                type={'text'}
                variant="outlined"
                label="Введіть TTN"
                onChange={e => inputValue(e)}
                value={postNumber}
                sx={{marginBottom:'15px', marginRight:'10px'}}
            />

            <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button variant="contained" type={"submit"} >Перевірити</Button>
            <Button variant="contained" onClick={(e) => clearInput()}>Очистити</Button>
            </ButtonGroup>
        </Box>
    );
}

export default FormStatus;