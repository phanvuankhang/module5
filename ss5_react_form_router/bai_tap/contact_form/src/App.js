import logo from './logo.svg';
import './App.css';
import {ContactForm} from "./component/ContactForm";
import React from "react";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <ContactForm/>
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
    );
}

export default App;
