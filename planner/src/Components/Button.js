import "./Button.css"
import { NavLink } from "react-router-dom"
import React from 'react'

function Button() {
    return (
        <NavLink to='sign-up'>
            <button className="btn">Sign up</button>
        </NavLink>
    )
}

export default Button
