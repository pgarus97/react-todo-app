import React , {useState} from "react";
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"



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

    const handleToggle = () => {
        //other method: setNavbarOpen(prev => !prev)
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    const [navbarOpen, setNavbarOpen] = useState(false);

    //looping through links to get individual items
    //dynamically add classname for css
    return (
        <nav className="navBar">
            <button onClick={handleToggle}>{navbarOpen ? (
                <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
            ) : (
                <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
            )}</button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                {links.map(link => {
                    return(
                      <li key={link.id}>
                          <NavLink to={link.path}
                                   onClick={() => closeMenu()}
                                   activeClassName="active-link"
                                   exact>
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