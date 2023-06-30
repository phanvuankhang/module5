import './App.css';

import React from "react";
import {Routes, Route} from 'react-router-dom'
import {ListService} from "./component/service/ListService";
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";
import {CustomerList} from "./component/customer/List";
import {ContractList} from "./component/contract/List";
import {CustomerCreate} from "./component/customer/Create";
import {CustomerEdit} from "./component/customer/Edit";
import {ContractCreate} from "./component/contract/Create";
import {CreateService} from "./component/service/Create";
import {EditService} from "./component/service/Edit";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<ListService/>}/>
                <Route path='/customer' element={<CustomerList />}/>
                <Route path='/contract' element={<ContractList />}/>
                <Route path='/create-service' element={<CreateService />}/>
                <Route path='/:id/edit-service' element={<EditService />}/>
                <Route path='/customer/create-form' element={<CustomerCreate />}/>
                <Route path='/customer/:id/edit-form' element={<CustomerEdit />}/>
                <Route path='/contract/create-form' element={<ContractCreate />}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
