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
import ListNews from './page/PageAdmin/news/ListNews';
import AddNews from './page/PageAdmin/news/AddNews';
import UpdateNew from './page/PageAdmin/news/UpdateNew';
import AllProducts from './page/PageClient/AllProducts';
import NewsPage from './page/PageClient/NewsPage';
import NewsDetail from './page/PageClient/NewsDetail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<WebsiteLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='products/:id/:slug' element={<ProductsPage/>}/>
        <Route path='products/all' element={<AllProducts/>}/>
        <Route path='products/:id/:cate/detail' element={<ProductDetail/>}/>
        <Route path='news' element={<NewsPage/>}/>
        <Route path='news/:id/detail' element={<NewsDetail/>}/>
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

        <Route path="news">
          <Route index element={<Navigate to="list"/>}/>
          <Route path="list" element={<ListNews/>} />
          <Route path="add" element={<AddNews/>} />
          <Route path=":id/update" element={<UpdateNew/>} />    
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
