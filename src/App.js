import React from 'react';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import HomePage from "./pages/Home/HomePage"
import DepartmentPage from "./pages/Department/DepartmentPage";

function App() {
    return (
        <Router>
            <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/department"}    element ={<DepartmentPage />} />
            </Routes>
        </Router>

    );
}

export default App;