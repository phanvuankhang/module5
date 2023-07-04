import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./component/Home";

import {ProductList} from "./component/List";
import Header from "./component/Header";
import {CreateProduct} from "./component/Create";
import {EditProduct} from "./component/Edit";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/product" element={<ProductList/>}/>
                <Route path="/product/create-form" element={<CreateProduct/>}/>
                <Route path="/product/:id/edit-form" element={<EditProduct/>}/>
            </Routes>
        </>
    );
}

export default App;
