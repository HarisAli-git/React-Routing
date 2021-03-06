import { Link, Nav } from "react-router-dom";

const Navbar = () => {
    return ( 
    <nav className="nav-wrapper red darken-3">
        <div className="container">
            <a className="brand-logo">Poke Times</a>
            <ul className="right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    </nav> 
    );
}
 
export default Navbar;