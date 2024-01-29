import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Homepage() {
  return (
    <div>
{/* 
        <NavLink to="/login">Login</NavLink> */}
        <Outlet/>
    
    </div>
  )
}

export default Homepage