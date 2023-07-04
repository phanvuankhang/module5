import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import React from "react";
import {ListOrders} from "./component/List";
import {CreateProduct} from "./component/Create";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ListOrders />}/>
                <Route path="/create-form" element={<CreateProduct />}/>
            </Routes>
        </>
    );
}

export default App;
