import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import React from "react";
import Header from "./components/Header";
import HomePage from "./components/Home";
import ListProductsPage from "./components/ListProducts";
import CreateProductPage from "./components/CreateProduct";
import UpdateProductPage from "./components/UpdateProduct";

function App() {
  return (
      <>

          <Header />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ListProductsPage />} />
              <Route path="/products/creation-form" element={<CreateProductPage />} />
              <Route path="/products/:id/edit-form" element={<UpdateProductPage />} />
          </Routes>
      </>
  );
}

export default App;
