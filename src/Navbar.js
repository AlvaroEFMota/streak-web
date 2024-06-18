import { Link } from "react-router-dom";

const Navbar = ({onLogout}) => {
    return (
    <nav className="navbar">
        <h1>Streak App</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <button onClick={onLogout}>Logout</button>
            <input type="button" value="Teste"/>
        </div>
    </nav>
    );
}
export default Navbar;
