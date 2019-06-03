import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Options = () => {
  return (
    <div className="options__container">
      <Link to="/settings">
        <button className="options__button">
          <FontAwesomeIcon style={{ paddingRight: "5px" }} icon="cog" />
          Ustawienia
        </button>
      </Link>
    </div>
  );
};

export default Options;
