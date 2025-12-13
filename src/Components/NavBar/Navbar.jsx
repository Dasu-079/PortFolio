import React from 'react'
import './NavBar.css'
import OIP from '../../assets/OIP.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='NavLogo' src={OIP} alt="" />
        <ul className='NavMenu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Certificates</li>
            <li>Contact</li>

        </ul>
        <div className="nav-connect">
            Connect with me

        </div>
        
      
    </div>
  )
}

export default Navbar
