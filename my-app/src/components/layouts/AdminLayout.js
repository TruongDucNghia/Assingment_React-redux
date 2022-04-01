import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/admin/Footer'
import Header from '../../components/admin/Header'
import Sidebar from '../../components/admin/Sidebar'


const AdminLayout = (props) => {
  return (
    <div className=' container-scroller'>
        <Header/>
        <div className='container-fluid page-body-wrapper pt-0 proBanner-padding-top'>
            <Sidebar/>
            <div className='main-panel'>
              <div className='content-wrapper'>
                <Outlet/>
              </div>
              <Footer/>
            </div>
        </div>
    </div>
  )
}

export default AdminLayout