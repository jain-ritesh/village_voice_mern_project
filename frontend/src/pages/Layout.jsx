import React from 'react'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout