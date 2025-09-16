import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="gradient-text">
                    MOVIE BUCKET
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link gradient-text">Home</Link>
                <Link to="/favorites" className="nav-link gradient-text">Favorites</Link>
            </div>
        </div>
    );
}

export default NavBar;
