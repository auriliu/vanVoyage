//
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, []);

  vans.length > 0 ? (
    vans.map((van) => (
      <Link
        to={`/host/vans/${van.id}`}
        key={van.id}
        className="host-van-link-wrapper"
      >
        <div className="host-van-single">
          <img src={van.imageUrl} alt="" />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ))
  ) : (
    <p>loading still...</p>
  );

  return (
    <section>
      <h1 className="host-vans-title">your listed vans</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? <section> {vans}</section> : <p>loading...</p>}
      </div>
    </section>
  );
}

export default HostVans;
