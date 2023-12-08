//

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function VanDetail() {
  const [van, setVan] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt="" />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <button className="link-button">rent this van</button>
        </div>
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
}

export default VanDetail;
