import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { MenuItems } from "./MenuItems"
import "./CSS/Dropdown.css"

function Dropdown() {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <div>
            <ul onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {MenuItems.map(item => {
                    return (
                        <li key={item.title}>
                            <NavLink className={item.cName} to={item.path} onClick={() => setClick(!click)}></NavLink>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default Dropdown
