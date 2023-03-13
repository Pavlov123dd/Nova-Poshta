import React,{Fragment} from 'react';
import  './style.sass'
import Header from "../../components/Header/Header";
import FormStatus from "../../components/FormStatus/FormStatus";
import Sidebar from "../../components/Sidebar/Sidebar";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import Box from '@mui/material/Box';

function HomePage(props) {
    return (

        <Fragment >
            <Header/>
            <FormStatus/>
            <Box className={'main-block'}>
                <InfoBlock/>
                <Sidebar/>
            </Box>

        </Fragment>
    );
}

export default HomePage;