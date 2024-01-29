import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
<nav>
<NavLink to="about">About</NavLink>
<br></br>
<NavLink to="contact">contact</NavLink>

</nav>

</>
  )
}

export default Home