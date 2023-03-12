import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home/HomePage"
import DepartmentPage from "./pages/Department/DepartmentPage";
import {Provider} from 'react-redux';
import store from './store/store';
import Container from '@mui/material/Container';
function App() {
    return (
        <Container maxWidth="md" sx={{padding:"20px"}}>
        <Provider store={store}>
        <Router>
            <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/department"} element={<DepartmentPage/>}/>
            </Routes>
        </Router>
        </Provider>
        </Container>
    );
}

export default App;