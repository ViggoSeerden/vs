import { Link, useMatch, useResolvedPath } from "react-router-dom"


function Navbar() {
    return (
        <nav className="navbar sticky top-0 grid-rows-1 grid-cols-3">
            <div>
                <button className="sitetitle" onClick={() => {window.location.href="/vs"; document.getElementById("top").scrollIntoView({ behavior: "smooth" })}}>Viggo Seerden</button>
            </div>
            <div>
                <ul>
                    <button className="navlink py-3" onClick={() => { document.getElementById("about").scrollIntoView({ behavior: "smooth" }) }}>About</button>
                    <button className="navlink py-3" onClick={() => { document.getElementById("experience").scrollIntoView({ behavior: "smooth" })}}>Experience</button>
                    <button className="navlink py-3" onClick={() => { document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}}>Contact</button>
                </ul>
            </div>
            <div>
                <ul style={{ paddingTop: "5px" }}>
                    <li>
                        <a className="navlink py-1" target="_blank" href="mailto:oggivseerden@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                    </li>
                    <li>
                        <a className="navlink py-1" target="_blank" href="https://github.com/ViggoSeerden"><i class="fa-brands fa-github"></i></a>
                    </li>
                    <li>
                        <a className="navlink py-1" target="_blank" href="https://www.linkedin.com/in/viggo-seerden/"><i class="fa-brands fa-linkedin"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props} style={{ color: "white", textDecoration: "none", paddingTop: "5px" }}>
                {children}
            </Link>
        </li>
    )
}