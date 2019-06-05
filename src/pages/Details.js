import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Details = ({ match }) => {
  const cities = JSON.parse(localStorage.getItem("cities"));
  const index = cities.findIndex(city => city.id === match.params.id);

  return (
    <React.Fragment>
      <h2 className="details__city">{cities[index].name}</h2>
      <ul className="details__list">
        <li className="details__details">
          <span className="details__label">szerokość geograficzna</span>
          <span>{cities[index].lat}</span>
        </li>
        <li className="details__details">
          <span className="details__label">długość geograficzna</span>
          <span>{cities[index].lon}</span>
        </li>
        <li className="details__details">
          <span className="details__label">średnia temperatura</span>
          <span>
            {cities[index].temp}
            {cities[index].units !== "metric" ? "F" : "\u00b0C"}
          </span>
        </li>
      </ul>
      <Link
        to={{
          pathname: "/"
        }}
      >
        <button className="details__back-button">
          <FontAwesomeIcon
            style={{ paddingRight: "5px" }}
            icon="arrow-circle-left"
          />
          Powrót
        </button>
      </Link>
    </React.Fragment>
  );
};

export default Details;
