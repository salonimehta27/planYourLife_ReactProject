import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import Button from "./Button"
import Dropdown from "./Dropdown"
function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const closeMobileMenu = () => {
        setClick(false)
    }
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        }
        else {
            setDropdown(true)
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        }
        else {
            setDropdown(false)
        }
    }
    const handleClick = () => setClick(!click)
    return (
        <div>
            <nav className='navbar'>
                <NavLink exact to="/" className='navbar-logo' onClick={closeMobileMenu}>PlanYourMagic<i className='fab fa-firstdraft' /></NavLink>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}></ul>
                <li className='nav-item'><NavLink exact to="/" className="nav-links" onClick={closeMobileMenu}>Home</NavLink></li>
                <li className='nav-item'><NavLink exact to="/calendar" className="nav-links" onClick={closeMobileMenu}>Calendar</NavLink></li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><NavLink exact to="/today" className="nav-links" onClick={closeMobileMenu}>Today<i className='fas fa-caret-down'></i></NavLink></li>
                {dropdown && <Dropdown />}
                <li className='nav-item'><NavLink exact to="/recipes" className="nav-links" onClick={closeMobileMenu}>Hungry?</NavLink></li>
                <li className='nav-item'><NavLink exact to="/space" className="nav-links" onClick={closeMobileMenu}>Space</NavLink></li>
                <li className='nav-item'><NavLink exact to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>Sign up</NavLink></li>
                <Button />
            </nav>
        </div>
    )
}

export default Navbar
