import React, { Suspense } from 'react'
import { Outlet } from 'react-router'
import NewNavbar from '../Navbar/NewNavbar';
const Layout = () => {
  return (
    <>
     <NewNavbar/>
      <Suspense fallback={<div>Loding....!</div>}>
          <Outlet>
            
          </Outlet>
        </Suspense>
    </>
  )
}

export default Layout
