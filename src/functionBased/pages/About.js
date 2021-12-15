import React from "react"
import { NavLink, useRouteMatch , Route} from "react-router-dom"
import SinglePage from "./SinglePage"



const About = () => {
    const { url, path } = useRouteMatch()

    return (
        <div className="about__content">
            <ul className={"about__list"}>
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