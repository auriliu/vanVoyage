//

import { useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function VanDetail() {
  const [van, setVan] = useState(null);
  const params = useParams();

  const location = useLocation();
  console.log("test: " + location.state.search);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <Link to={`../?${search}`} relative="path" className="back-button">
            &larr; <span>back to {type} vans</span>
          </Link>
          <div className="flex">
            <div className="flex image">
              <img src={van.imageUrl} alt="" className="van-detail-img" />
            </div>
            <div className="flex info">
              <span className={`van-type ${van.type} selected`}>
                {van.type}
              </span>
              <h2>{van.name}</h2>
              <p className="van-price">
                <span>${van.price}</span>/day
              </p>
              <button className="link-button">rent this van</button>
            </div>
          </div>
        </div>
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
}

export default VanDetail;
