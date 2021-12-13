import React from "react";
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"



const Navbar = () => {
    //can add more links if needed
    const links = [
        {
            id:1,
            path: "/",
            text:"Home",
        },
        {
            id:2,
            path: "/about",
            text:"About",
        },
    ]

    //looping through links to get individual items
    return (
        <nav className="navBar">
            <ul>
                {links.map(link => {
                    return(
                      <li key={link.id}>
                          <NavLink to={link.path}>
                              {link.text}
                          </NavLink>
                      </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar