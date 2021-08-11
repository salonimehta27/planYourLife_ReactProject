import { NavLink } from "react-router-dom"
import { useState } from "react"
import { GiMagickTrick } from 'react-icons/gi';

import "./CSS/Navbar.css"
function Navbar() {

    const [click, setClick] = useState(false)

    function handleClick() {
        setClick(!click)
    }
    function closeMobileMenu() {
        setClick(false)
    }
    return (
        <div>
            <nav className='navbar'>
                <NavLink exact to="/" className='navbar-logo' >PlanYourMagic<GiMagickTrick color="white" /></NavLink>
                <div className="menu-icon" onClick={handleClick}><i className={click ? "fas fa-times" : "fas fa-bars"}></i></div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <NavLink exact to="/calendar" className="nav-links" onClick={closeMobileMenu}>Calendar</NavLink>
                    </li>
                    <li className='nav-item' >
                        <NavLink exact to="/today" className="nav-links" onClick={closeMobileMenu}>Today<i className='fas fa-caret-down'></i></NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to="/recipes" className="nav-links" onClick={closeMobileMenu} >Hungry?</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to="/space" className="nav-links" onClick={closeMobileMenu} >Space</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
