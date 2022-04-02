import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import Banner from './components/clients/home/Banner';
import AdminLayout from './components/layouts/AdminLayout';
import WebsiteLayout from './components/layouts/WebsiteLayout';
import AddCate from './page/PageAdmin/category/AddCate';
import ListCate from './page/PageAdmin/category/List';
import UpdateCate from './page/PageAdmin/category/UpdateCate';
import Dashboard from './page/PageAdmin/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<WebsiteLayout/>}>
        <Route index element={<Banner/>}/>
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
      </Route>
    </Routes>
  );
}

export default App;
