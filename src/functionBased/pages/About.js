import React from "react"
import { NavLink, useRouteMatch , Route} from "react-router-dom"
import SinglePage from "./SinglePage"



const About = (props) => {
    const { url, path } = useRouteMatch()

    return (
        <div>
            <ul>
                <li>
                    <NavLink to={`${url}/about-app`} activeClassName="active-link">About App</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/about-author`} activeClassName="active-link">About Author</NavLink>
                </li>
            </ul>
            <Route path={`${path}/:slug`}>
                <SinglePage />
            </Route>
        </div>
    )
}
export default About