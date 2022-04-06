import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from './page/PageClient/HomePage';
import AdminLayout from './components/layouts/AdminLayout';
import WebsiteLayout from './components/layouts/WebsiteLayout';
import AddCate from './page/PageAdmin/category/AddCate';
import ListCate from './page/PageAdmin/category/List';
import UpdateCate from './page/PageAdmin/category/UpdateCate';
import Dashboard from './page/PageAdmin/Dashboard';
import AddProduct from './page/PageAdmin/products/AddProduct';
import ListProducts from './page/PageAdmin/products/listProducts';
import UpdateProduct from './page/PageAdmin/products/UpdateProduct';
import ProductsPage from './page/PageClient/ProductsPage';
import ProductDetail from './page/PageClient/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<WebsiteLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='products' element={<ProductsPage/>}/>
        <Route path='products/:id/detail' element={<ProductDetail/>}/>
      </Route>

      <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<Navigate to="dashboard" />}/>
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="category">
          <Route index element={<Navigate to="list"/>}/>
          <Route path="list" element={<ListCate/>} />
          <Route path="add" element={<AddCate/>} />
          <Route path=":id/update" element={<UpdateCate/>} />
          
        </Route>
        <Route path="products">
          <Route index element={<Navigate to="list"/>}/>
          <Route path="list" element={<ListProducts/>} />
          <Route path="add" element={<AddProduct/>} />
          <Route path=":id/update" element={<UpdateProduct/>} />
          
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
