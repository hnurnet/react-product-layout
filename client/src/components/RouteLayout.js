import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar'

const RouteLayout = () => {
  return (
    <>
   <NavBar/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default RouteLayout