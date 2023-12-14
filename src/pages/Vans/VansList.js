import { useEffect, useState } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";

import { getVans } from "../../api";

export function loader() {
  return getVans();
}

function VansList() {
  // const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [loading, setLoadig] = useState(false);
  const [error, setError] = useState(null);
  const vans = useLoaderData();
  // console.log("data: " + JSON.stringify(data, null, 2));

  const typeFilter = searchParams.get("type");

  // useEffect(() => {
  //   async function loadVans() {
  //     setLoadig(true);
  //     try {
  //       const data = await getVans();
  //       setVans(data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoadig(false);
  //     }
  //   }
  //   loadVans();
  // }, []);

  const displayedVans = typeFilter
    ? vans.filter((char) => char.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        state={{ search: searchParams.toString(), type: typeFilter }}
      >
        <img src={van.imageUrl} alt="" />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  // if (loading) {
  //   return <h1>loading...</h1>;
  // }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        {/* this here replaces ALL search params. u want to merge them. */}
        <button
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "simple")}
        >
          simple
        </button>
        <button
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "rugged")}
        >
          rugged
        </button>
        <button
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "luxury")}
        >
          luxury
        </button>
        {typeFilter && (
          <button
            className="van-type clear-filters"
            onClick={() => handleFilterChange("type", null)}
          >
            clear
          </button>
        )}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}

export default VansList;
