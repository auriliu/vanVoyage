//

import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="site-logo" to={"/"}>
        #vanVoyage
      </Link>
      <nav>
        <Link to="/host">host</Link>
        <Link to="/about">about</Link>
        <Link to="/vans">vans</Link>
      </nav>
    </header>
  );
}

export default Header;
