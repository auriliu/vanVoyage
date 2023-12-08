//
import { Link, Outlet } from "react-router-dom";

function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <Link to="/host">dashboard</Link>
        <Link to="/host/income">income</Link>
        <Link to="/host/reviews">reviews</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
