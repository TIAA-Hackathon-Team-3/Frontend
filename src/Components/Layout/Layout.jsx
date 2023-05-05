import React, { Suspense } from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <Suspense fallback={<div>Loding....!</div>}>
          <Outlet>
            
          </Outlet>
        </Suspense>
    </>
  )
}

export default Layout
