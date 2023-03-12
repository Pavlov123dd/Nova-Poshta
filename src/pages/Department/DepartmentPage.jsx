import React from 'react';
import './style.sass'
import Header from "../../components/Header/Header";
import FormDepartment from "../../components/DeparrmentComponents/FormDepartment/FormDepartment";

function DepartmentPage(props) {
    return (
        <div className={'department-wrapper'}>
            <Header/>
            <FormDepartment />
        </div>
    );
}

export default DepartmentPage;