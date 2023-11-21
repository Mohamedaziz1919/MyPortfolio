import React from 'react'
// import Intro from '../intro/Intro.js'
// import Contact from '../contact/Contact.js'
import './Navbar.css'
import logo1 from '../../Assets/logo1.jpg'
import { BiMessageAlt } from 'react-icons/bi';
import {Link} from 'react-scroll'
function Navbar() {
 

  return (
<nav className='navbar'>
    <img src={logo1} alt='Logo' className='logo'/>
    <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} className='desktopMenuListItem'  >About Me</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100}  className='desktopMenuListItem'>Skills</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true}offset={-100}  className='desktopMenuListItem'>Works</Link>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} className='desktopMenuListItem'></Link>

  
    </div>
    <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <BiMessageAlt className='desktopMenuImg'/>
        Contact Me
      </button>
</nav>
    )
}

export default Navbar