import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Settings = props => {
  const APIKEY = "1ea9d8ecd83d43c9a0801ba96a6b4ae1";
  let sendTable = [];
  let tempArray = [];
  console.log(props);
  const [checked, setChecked] = useState("metric");
  const [newRes, setNewRes] = useState([]);
  console.log(checked);
  // units metric or imperial

  let newInput = JSON.parse(localStorage.getItem("cities"));

  const handleCheckedChange = changeEvent => {
    console.log("check!");
    setChecked(changeEvent.target.value);
  };

  const handleSaveClick = () => {
    if (newInput) {
      newInput.forEach(input => {
        const API = `https://api.openweathermap.org/data/2.5/forecast?q=${
          input.name
        }&lang=pl&units=${checked}&appid=${APIKEY}`;

        fetch(API)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw Error("Nie mozna pobrać danych");
          })
          .then(data => {
            data.list.forEach(measure => {
              tempArray.push(measure.main.temp);
            });
            const sumTemp = tempArray.reduce((a, b) => a + b, 0);
            const averageTemp = sumTemp / tempArray.length;

            const city = {
              name: input.name.toLocaleLowerCase(),
              id: input.name,
              err: false,
              temp: Math.round(averageTemp),
              units: checked,
              lon: data.city.coord.lon,
              lat: data.city.coord.lat
            };
            sendTable.push(city);
            setNewRes([...newRes, sendTable]);
            localStorage.setItem("cities", JSON.stringify(sendTable));
            console.log(sendTable);
            console.log(city);
            console.log(newRes);
          });
      });
    }
  };

  return (
    <React.Fragment>
      <h2 className="settings__header">ustawienia</h2>
      <h3 className="settings__unit">jednostka:</h3>
      <ul className="settings__list">
        <li className="settings__list-unit">
          <label>
            <input
              type="radio"
              value="metric"
              checked={checked === "metric"}
              onChange={handleCheckedChange}
            />
            C
          </label>
        </li>
        <li className="settings__list-unit">
          {" "}
          <label>
            <input
              type="radio"
              value="imperial"
              checked={checked === "imperial"}
              onChange={handleCheckedChange}
            />
            F
          </label>
        </li>
      </ul>
      <div className="settings__button-container">
        <Link
          to={{
            pathname: "/",
            state: {
              list: newRes,
              units: checked
            }
          }}
        >
          <button className="settings__button back">
            {" "}
            <FontAwesomeIcon
              style={{ paddingRight: "5px" }}
              icon="arrow-circle-left"
            />
            Powrót
          </button>
        </Link>
        <button className="settings__button save" onClick={handleSaveClick}>
          zapisz
          <FontAwesomeIcon style={{ paddingLeft: "5px" }} icon="check-circle" />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Settings;
