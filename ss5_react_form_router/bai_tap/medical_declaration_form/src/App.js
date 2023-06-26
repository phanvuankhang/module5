import './App.css';
import React from "react";
import {ToastContainer} from "react-toastify";
import {MedicalDeclaration} from "./component/MedicalDeclarationForm";

function App() {
    return (
        <>
            <MedicalDeclaration/>
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
