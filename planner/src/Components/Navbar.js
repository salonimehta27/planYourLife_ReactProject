import { NavLink } from "react-router-dom"
import { useState } from "react"
import { GiMagickTrick } from "react-icons/gi"
import { GiSpaceSuit } from "react-icons/gi"
import { BiCalendar } from "react-icons/bi"
import { GiNewspaper } from "react-icons/gi"
import { FaTasks } from "react-icons/fa"
import { MdRestaurant } from "react-icons/md"

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
			<nav className="navbar">
				<NavLink exact to="/" className="navbar-logo">
					PlanYourMagic
					<GiMagickTrick color="white" />
				</NavLink>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<NavLink
							exact
							to="/tasks"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							<FaTasks /> Tasks
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							to="/calendar"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							<BiCalendar /> Calendar
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							to="/today"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							<GiNewspaper /> Today<i className="fas fa-caret-down"></i>
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							to="/recipes"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							<MdRestaurant /> Hungry?
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							to="/space"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							<GiSpaceSuit /> Space
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
