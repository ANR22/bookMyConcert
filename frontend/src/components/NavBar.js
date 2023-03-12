import "../styles/home.css";

import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <ul>
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/search" className="navbar-link">
            Search
          </Link>
        </li>
        <li>
          <Link to="/register" className="navbar-link">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
