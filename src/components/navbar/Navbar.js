import "./navbar.css";
const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container">
            <a className="navbar-brand" href="#home">
                <span className="logo">abosalem</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link px-3" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-3" href="#about">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-3" href="#contact">Get in Touch Me</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;