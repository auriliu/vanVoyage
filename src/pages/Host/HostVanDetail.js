import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink, Link, Outlet } from "react-router-dom";

const activeStyle = {
  fontWeight: "bold",
  color: "#161616",
};

function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, [id]);

  if (!currentVan) {
    return <h1>loading... </h1>;
  }

  return (
    <section>
      {/* relative to the path, not the routes. */}
      <Link to=".." relative="path" className="back-button">
        &larr; <span>back to all vans</span>
      </Link>
      <div>
        <img src={currentVan.imageUrl} alt="" width="150px" />
        <h2>{currentVan.name}</h2>
        <p>{currentVan.price}</p>
        <p>{currentVan.type}</p>
      </div>
      <nav className="host-van-detail-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          info
        </NavLink>
        <NavLink
          to="pricing"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          pricing
        </NavLink>
        <NavLink
          to="photos"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          photos
        </NavLink>
      </nav>
      <Outlet context={{ currentVan }} />
    </section>
  );
}

export default HostVanDetail;
