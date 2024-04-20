import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <nav className="navbar">
        <h1>Streak App</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
        </div>
    </nav>
    );
}
export default Navbar;
