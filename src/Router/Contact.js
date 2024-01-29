import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { ContactDta } from './JsonRouer'


function Contact() {
    const Data=ContactDta()
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"3rem"}}>

<Outlet/>
{
    Data.map((res)=>(
<>
<NavLink to={`/contact/${res.id}`}      style={({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
    };
  }}     >
{res.name}

</NavLink>


</>
    )

    )
}


<Outlet/>
    </div>
  )
}

export default Contact