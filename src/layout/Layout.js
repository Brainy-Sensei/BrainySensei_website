import React from 'react'
import Navbar from '../componets/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../componets/Footer'


function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
