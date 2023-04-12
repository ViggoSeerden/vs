function Navbar() {
    return (
        <nav className="navbar sticky top-0 grid-rows-1 grid-cols-3 z-10">
            <div className="grid-start-1 xs:col-span-1 2xs:col-span-full xs:text-center sm:text-left justify-center flex">
                <button className="sitetitle sm:text-3xl xs:text-lg 2xs:text-md" onClick={() => {window.location.href="/vs"; document.getElementById("top").scrollIntoView({ behavior: "smooth" })}}>Viggo Seerden</button>
            </div>
            <div className="col-span-1 2xs:hidden sm:block mr-24">
                <ul>
                    <button className="navlink py-3" onClick={() => { document.getElementById("about").scrollIntoView({ behavior: "smooth" }) }}>About</button>
                    <button className="navlink py-3" onClick={() => { document.getElementById("experience").scrollIntoView({ behavior: "smooth" })}}>Experience</button>
                </ul>
            </div>
            <div className="col-span-1 grid-end-1 2xs:hidden xs:block">
                <ul style={{ paddingTop: "5px" }}>
                    <li>
                        <a className="navlink py-1" title="E-Mail: oggivseerden@gmail.com" target="_blank" href="mailto:oggivseerden@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                    </li>
                    <li>
                        <a className="navlink py-1" title="LinkedIn: Viggo Seerden" target="_blank" href="https://www.linkedin.com/in/viggo-seerden/"><i className="fa-brands fa-linkedin"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;