import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home/HomePage"
import DepartmentPage from "./pages/Department/DepartmentPage";
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
    return (
        <Provider store={store}>
        <Router>
            <Routes>

                    <Route path={"/"} element={<HomePage/>}/>

                <Route path={"/department"} element={<DepartmentPage/>}/>
            </Routes>
        </Router>
        </Provider>
    );
}

export default App;