import './App.css';

import React from "react";
import {Routes, Route} from 'react-router-dom'
import {ListService} from "./component/service/ListService";
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";
import {useNavigate} from "react-router-dom";
import {CustomerList} from "./component/customer/List";
import {ContractList} from "./component/contract/List";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<ListService/>}/>
                <Route path='/customer' element={<CustomerList/>}/>
                <Route path='/contract' element={<ContractList/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
