import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import Banner from './components/clients/home/Banner';
import AdminLayout from './components/layouts/AdminLayout';
import WebsiteLayout from './components/layouts/WebsiteLayout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<WebsiteLayout/>}>
        <Route index element={<Banner/>}/>
      </Route>

      <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<h1>HomePage admin</h1>}/>
      </Route>
    </Routes>
  );
}

export default App;
