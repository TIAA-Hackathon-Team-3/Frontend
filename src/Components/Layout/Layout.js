import React from 'react'

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
