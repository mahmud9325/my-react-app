import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nabver() {
    return (
        <nav>
            <NavLink to={"/"} className='nav-link'>Home</NavLink>
            <NavLink to={"/blogs"} className='nav-link'>Blogs</NavLink>
            <NavLink to={"/contuct"} className='nav-link'>Contuct</NavLink>
            <NavLink to={"/abouts"} className='nav-link'>Abouts</NavLink>
        </nav>
    )
}

export default Nabver