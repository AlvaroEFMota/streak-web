//import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="navbar">
        <h1>Streak App</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/login">Login</a>
        </div>

    </nav>
    );
}
export default Navbar;
