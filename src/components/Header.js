//

import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo-no-background.png";

function Header() {
  const activeStyle = {
    fontweight: "bold",
    color: "#161616",
  };

  return (
    <header>
      <Link className="site-logo" to={"/"}>
        {/* #vanVoyage */}
        <img src={logo} alt="" className="logo" />
      </Link>
      <nav>
        {/* <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host"
        >
          host
        </NavLink> */}
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/about"
        >
          about
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/vans"
        >
          vans
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
