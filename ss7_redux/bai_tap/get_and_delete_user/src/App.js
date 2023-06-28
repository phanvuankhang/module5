import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import React from "react";
import {UserList} from "./component/UserList";

function App() {
  return (
    <>
      <Routes>
          <Route path={'/'} element={<UserList/>}/>
      </Routes>
      </>
  );
}

export default App;
