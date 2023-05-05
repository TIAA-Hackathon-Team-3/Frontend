import React, { Suspense } from 'react'
import { Outlet } from 'react-router'
import Navbar from "../Navbar/Navbar";
const Layout = () => {
  return (
    <>
    <Navbar/>
      <Suspense fallback={<div>Loding....!</div>}>
          <Outlet>
            
          </Outlet>
        </Suspense>
    </>
  )
}

export default Layout
