import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { faLinkedIn } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="sitetitle" to="/vs">Viggo Seerden</Link>
            <ul>
                <CustomLink to="/vs/About">About</CustomLink>
                <CustomLink to="/vs/Skills">Skills</CustomLink>
                <CustomLink to="/vs/Contact">Contact</CustomLink>
                <li>
                    <a className="navlink" target="_blank" href="https://www.linkedin.com/in/viggo-seerden/"><i class="fa-brands fa-linkedin"></i></a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props} style={{color: "white", textDecoration: "none"}}>
                {children}
            </Link>
        </li>
    )
}