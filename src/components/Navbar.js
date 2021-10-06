import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="bg-red-500 w-100 d-flex justify-around text-white">
            <div className="container mx-auto flex justify-between">
                <nav>
                    <NavLink to="/" exact>MJP</NavLink>
                    <NavLink to="/post">Blog Post</NavLink>
                    <NavLink to="/project">Projects</NavLink>
                    <NavLink to="about">About Me</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
