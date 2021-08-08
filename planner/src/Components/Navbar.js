import { NavLink } from "react-router-dom"
import "./CSS/Navbar.css"
import Button from "./Button"
function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <NavLink exact to="/" className='navbar-logo' style={{ postion: "relative", displayFlex: "left" }} >PlanYourMagic<i className='fab fa-firstdraft' /></NavLink>
                <li className='nav-item'><NavLink exact to="/calendar" className="nav-links" >Calendar</NavLink></li>
                <li className='nav-item' ><NavLink exact to="/today" className="nav-links" >Today<i className='fas fa-caret-down'></i></NavLink>
                </li>
                <li className='nav-item'><NavLink exact to="/recipes" className="nav-links" >Hungry?</NavLink></li>
                <li className='nav-item'><NavLink exact to="/space" className="nav-links" >Space</NavLink></li>
            </nav>
        </div>
    )
}

export default Navbar
