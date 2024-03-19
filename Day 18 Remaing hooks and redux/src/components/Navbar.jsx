import React, { useEffect } from 'react'
// import { RouterProvider } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
//     useEffect(() => {
//       alert("reload")
    
//     })
    
  return (
    <div>Navbar
        <ul >
            <li><Link to="/home">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/home/:username">contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar