import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setAllTtn, setInfoThunk, setTtn} from "../../store/home/actions";

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

        <div style={{
            minHeight: '300px',
            minWidth: '100px',
            border: '1px',
            borderStyle: "solid",
            borderColor: '#000',
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: '5px'
        }}>
            <p>Історія</p>
            {allPostNumber.length > 0 ? (
                <ul>
                    {allPostNumber.map((item, i) => <li key={i} onClick={e => checkTtnSidebar(item, e)}>{item}</li>)}
                </ul>
            ) : null}
            <button onClick={() => clearMemoryTtn()}>Clear post number</button>
        </div>

    );
}

export default Sidebar;