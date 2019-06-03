import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faMinusCircle);

const Result = props => {
  let content = null;

  if (props.city) {
    content = (
      <li className="result">
        <Link
          className="result__city"
          to={{
            pathname: "/details",
            state: {
              city: props.city,
              lon: props.lon,
              lat: props.lat,
              temp: props.temp,
              units: props.units
            }
          }}
        >
          <span>{props.city}</span>
        </Link>
        <span className="result__temp">
          {props.temp} {props.units !== "metric" ? "F" : "\u00b0C"}
        </span>
        <button
          onClick={() => props.delete(props.id)}
          className="result__delete"
        >
          <FontAwesomeIcon
            style={{ paddingRight: "5px" }}
            icon="minus-circle"
          />
          Usuń
        </button>
      </li>
    );
  }
  return <>{content}</>;
};

export default Result;
