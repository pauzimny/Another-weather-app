import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

const Form = props => {
  return (
    <form className="form" onSubmit={props.submit}>
      <input
        className="form__input"
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder=" Nazwa miasta"
      />
      <button className="form__button">
        <FontAwesomeIcon style={{ paddingRight: "5px" }} icon="search" />
        Dodaj miasto
      </button>
    </form>
  );
};

export default Form;
