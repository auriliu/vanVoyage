import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <img src={currentVan.imageUrl} alt="" width="150px" />
      <h2>{currentVan.name}</h2>
      <p>{currentVan.price}</p>
      <p>{currentVan.type}</p>
    </div>
  );
}

export default HostVanDetail;
