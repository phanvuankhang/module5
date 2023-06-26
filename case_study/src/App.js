import logo from './logo.svg';
import './App.css';
import {CreateHouse} from "./component/service/house/Create";
import React from "react";
import {EditHouse} from "./component/service/house/Edit";
import {ListService} from "./component/service/ListService";
import {CreateRoom} from "./component/service/room/Create";
import {EditRoom} from "./component/service/room/Edit";
import {CreateVilla} from "./component/service/villa/Create";
import {EditVilla} from "./component/service/villa/Edit";

function App() {
  return (
   <EditVilla/>

  );
}

export default App;
