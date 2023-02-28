import React from 'react';
import style from './style.sass'
import Header from "../../components/Header/Header";
import FormStatus from "../../components/FormStatus/FormStatus";
import Sidebar from "../../components/Sidebar/Sidebar";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

function HomePage(props) {
    return (
        <div className={'home-wrapper'}>
            <Header/>
            <FormStatus/>
            <div className={'main-block'}>
                <InfoBlock/>
                <Sidebar/>
            </div>

        </div>
    );
}

export default HomePage;