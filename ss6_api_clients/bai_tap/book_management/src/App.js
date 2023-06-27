import logo from './logo.svg';
import './App.css';
import {BookList} from "./component/BookList";
import React from "react";
import {Routes,Route} from 'react-router-dom'
import {BookCreate} from "./component/BookCreate";
import {ToastContainer} from "react-toastify";
import {BookEdit} from "./component/BookEdit";
function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<BookList/>}/>
                <Route path='/create' element={<BookCreate/>}/>
                <Route path='/edit/:id' element={<BookEdit/>}/>
            </Routes>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        </>
    )
        ;
}

export default App;
