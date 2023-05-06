import React, { Suspense } from 'react'
import { Outlet } from 'react-router'
import Navbar from "../Navbar/Navbar";
import NewNavbar from '../Navbar/NewNavbar';
const Layout = () => {
  return (
    <>
    {/* <Navbar/>
     */}
     <NewNavbar/>
      <Suspense fallback={<div>Loding....!</div>}>
          <Outlet>
            
          </Outlet>
        </Suspense>
    </>
  )
}

export default Layout
