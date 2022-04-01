import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../clients/Footer'
import Header from '../clients/Header'
const WebsiteLayout = () => {
  return (
    <div>
        <header>
            <Header/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default WebsiteLayout