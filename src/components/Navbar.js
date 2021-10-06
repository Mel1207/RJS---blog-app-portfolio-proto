import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="bg-red-500 w-100 d-flex justify-around text-white">
            <div className="container mx-auto">
                <nav className="flex item-center justify-between py-5">
                    <NavLink to="/" exact className="cursive" activeClassName="text-red">MJP</NavLink>
                    <div>
                        <NavLink to="/post" className="mx-3">Blog Post</NavLink>
                        <NavLink to="/project" className="mx-3">Projects</NavLink>
                        <NavLink to="about" className="mx-3">About Me</NavLink>
                    </div>
                    <div>
                        social icons
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
