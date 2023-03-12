import React from 'react';
import './style.sass'
import {useDispatch, useSelector} from "react-redux";
import {setAllTtn, setInfoThunk, setTtn} from "../../store/home/actions";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Sidebar() {
    const {allPostNumber} = useSelector(state => state.list);
    const dispatch = useDispatch();

    const clearMemoryTtn = () => {
        dispatch(setAllTtn([]))
        localStorage.removeItem('allPostNumber')
        localStorage.setItem('allPostNumber', JSON.stringify([]))
    }

    const checkTtnSidebar = (item, e) => {
        dispatch(setTtn(e.target.innerHTML))
        dispatch(setInfoThunk(item));
    }


    return (

        <Box  className="wrapper-sidebar">
            <Typography variant="h6" gutterBottom>Історія</Typography>
            {allPostNumber.length > 0 ? (
                <List>
                    {allPostNumber.map((item, i) => <ListItem sx={{paddingLeft:'2px'}} key={i} onClick={e => checkTtnSidebar(item, e)}>{item}</ListItem>)}
                </List>
            ) : null}
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => clearMemoryTtn()}>Очистити</Button>
        </Box>

    );
}

export default Sidebar;