import './App.css';

import React from "react";
import {Routes, Route} from 'react-router-dom'
import {ListService} from "./component/service/ListService";
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";
import {useNavigate} from "react-router-dom";
import {CustomerList} from "./component/customer/List";
import {ContractList} from "./component/contract/List";
import {CreateService} from "./component/service/Create";
import {CustomerCreate} from "./component/customer/Create";
import {CustomerEdit} from "./component/customer/Edit";
import {ContractCreate} from "./component/contract/Create";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<ListService/>}/>
                <Route path='/customer' element={<CustomerList/>}/>
                <Route path='/contract' element={<ContractList/>}/>
                <Route path='/create-service' element={<CreateService/>}/>
                <Route path='/create-customer' element={<CustomerCreate/>}/>
                <Route path='/edit-customer' element={<CustomerEdit/>}/>
                <Route path='/create-contract' element={<ContractCreate/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
