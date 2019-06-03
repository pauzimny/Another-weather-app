import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Details = ({ location }) => {
  return (
    <>
      <h2 className="details__city">{location.state.city}</h2>
      <ul className="details__list">
        <li className="details__details">
          <span className="details__label">szerokość geograficzna</span>
          <span>{location.state.lat}</span>
        </li>
        <li className="details__details">
          <span className="details__label">długość geograficzna</span>
          <span>{location.state.lon}</span>
        </li>
        <li className="details__details">
          <span className="details__label">średnia temperatura</span>
          <span>
            {location.state.temp}
            {location.state.units !== "metric" ? "F" : "\u00b0C"}
          </span>
        </li>
      </ul>
      <Link
        to={{
          pathname: "/",
          state: {
            units: location.state.units
          }
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
    </>
  );
};

export default Details;
