import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {setAllTtn, setInfo, setInfoThunk, setTtn} from '../../store/home/actions';


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
        <form style={{marginRight: '20px'}} onSubmit={e => submitForm(e)}>
            <input type={'text'}
                   style={{marginRight: '20px', marginBottom: '20px'}}
                   onChange={e => inputValue(e)}
                   value={postNumber}/>
            <button type={"submit"} style={{marginRight: '20px'}}>Get Status TTN</button>
            <button onClick={(e) => clearInput()}>Clear</button>
        </form>
    );
}

export default FormStatus;