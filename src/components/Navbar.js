import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const Navbar = () => {
    return (
        <header className="bg-blue-500 w-100 d-flex justify-around text-white">
            <div className="container mx-auto">
                <nav className="flex item-center justify-between py-5">
                    <NavLink 
                        to="/" 
                        exact 
                        className="cursive" 
                        >MJP</NavLink>
                    <div>
                        <NavLink 
                            to="/post" 
                            className="mx-3 py-2" 
                            activeClassName="active-link">Blog Post</NavLink>
                        <NavLink 
                            to="/project" 
                            className="mx-3 py-2" 
                            activeClassName="active-link">Projects</NavLink>
                        <NavLink 
                            to="about" 
                            className="mx-3 py-2" 
                            activeClassName="active-link">About Me</NavLink>
                    </div>
                    <div>
                        <SocialIcon 
                            url="https://www.facebook.com/" 
                            className="ml-3" 
                            target="_blank" 
                            fgColor="#fff" 
                            style={
                                {
                                    height: 20,
                                    width: 20
                                }
                            }/>
                        <SocialIcon 
                            url="https://www.instagram.com/" 
                            className="ml-3" 
                            target="_blank"  
                            fgColor="#fff" 
                            style={
                                {
                                    height: 20,
                                    width: 20
                                }
                            }/>
                        <SocialIcon 
                            url="https://www.youtube.com/" 
                            className="ml-3" 
                            target="_blank"  
                            fgColor="#fff" 
                            style={
                                {
                                    height: 20,
                                    width: 20
                                }
                            }/>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
