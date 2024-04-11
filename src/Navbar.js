// function Navbar() {
//     return (<><h1>Streak App</h1></>);
// }

const Navbar = () => {
    return (
    <nav className="navbar">
        <h1>Streak App</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create">New Activity</a>
            <a href="/About">About</a>
        </div>

    </nav>
    );
}
export default Navbar;