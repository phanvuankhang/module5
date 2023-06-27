import './App.css';

import React from "react";
import {Routes, Route} from 'react-router-dom'
import {ListService} from "./component/service/ListService";
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<ListService/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
