// import { useSpring, animated } from "@react-spring/web";
import logo from "../../assets/gestify__1_-removebg-preview_1.png";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import {Link} from "react-scroll";

export function NavbarLand() {
    const [click, setClick] = useState(false)
        const handleClick = () => setClick(!click)
    
        const closeMenu = () => setClick(false)
    
        return (
            <div className='header w-full shadow-lg'>
                <nav className='navbar z-50 w-full top-0'>
                    <a href='/landingpage' className='logo'>
                        <img src={logo} alt='logo' />
                    </a>
                    <div className='hamburger' onClick={handleClick}>
                        {click ? (<FaTimes size={30} style={{ color: '#89f9ea' }} />)
                            : (<FaBars size={30} style={{ color: '#89f9ea' }} />)}
    
                    </div>
                    <button>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'>
                            <Link to='secone' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='sectwo' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='secthree' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Testimonials</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='secfour' spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Demo</Link>
                        </li>
                    </ul>
                    </button>
                </nav>
            </div>
  );
}

// import React, { useState } from 'react'
// import { FaBars, FaTimes } from 'react-icons/fa'
// import logo from "../../assets/gestify__1_-removebg-preview_1.png";

// import './Navbar.css'

// const NavbarLand = () => {

//     const [click, setClick] = useState(false)
//     const handleClick = () => setClick(!click)

//     const closeMenu = () => setClick(false)

//     return (
//         <div className='header'>
//             <nav className='navbar'>
//                 <a href='/' className='logo'>
//                     <img src={logo} alt='logo' />
//                 </a>
//                 <div className='hamburger' onClick={handleClick}>
//                     {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
//                         : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

//                 </div>
//                 <ul className={click ? "nav-menu active" : "nav-menu"}>
//                     <li className='nav-item'>
//                         <a href='/' onClick={closeMenu}>Home</a>
//                     </li>
//                     <li className='nav-item'>
//                         <a href='#about' onClick={closeMenu}>About</a>
//                     </li>
//                     <li className='nav-item'>
//                         <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
//                     </li>
//                     <li className='nav-item'>
//                         <a href='#demo' onClick={closeMenu}>Demo</a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }

// export default NavbarLand;




