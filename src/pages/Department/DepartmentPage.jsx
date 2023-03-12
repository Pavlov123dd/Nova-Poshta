import React,{Fragment} from 'react';
import './style.sass'
import Header from "../../components/Header/Header";
import FormDepartment from "../../components/DeparrmentComponents/FormDepartment/FormDepartment";

function DepartmentPage(props) {
    return (
        <Fragment >
            <Header/>
            <FormDepartment />
        </Fragment>
    );
}

export default DepartmentPage;