//

import { NavLink, Link } from "react-router-dom";

function Header() {
  const activeStyle = {
    fontweight: "bold",
    color: "#161616",
  };

  return (
    <header>
      <Link className="site-logo" to={"/"}>
        #vanVoyage
      </Link>
      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host"
        >
          host
        </NavLink>
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
