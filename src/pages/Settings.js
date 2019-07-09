import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Done from "@material-ui/icons/Done";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  backBtn: {
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#ebebeb"
    }
  },
  detailsCard: {
    margin: "10px auto",
    width: "80%",
    flexGrow: 1
  },
  saveBtn: {
    marginLeft: "15px",
    paddingLeft: "15px",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#ebebeb"
    }
  }
});

const OrangeCheckbox = withStyles({
  root: {
    color: "#ff680c",
    "&$checked": {
      color: "#ff680c"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const Settings = props => {
  const classes = useStyles();

  const APIKEY = "1ea9d8ecd83d43c9a0801ba96a6b4ae1";
  let sendTable = [];
  let tempArray = [];

  const [checked, setChecked] = useState("metric");
  const [newRes, setNewRes] = useState([]);

  let newInput = JSON.parse(localStorage.getItem("cities"));

  useEffect(() => {
    localStorage.setItem("units", checked);
  }, [checked]);

  const handleCheckedChange = changeEvent => {
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
          });
      });
    }
  };

  return (
    <React.Fragment>
      <Card raised="true" className={classes.detailsCard}>
        <h2 className="settings__header">ustawienia</h2>
        <h3 className="settings__unit">jednostka:</h3>
        <ul className="settings__list">
          <li className="settings__list-unit">
            <label>
              <OrangeCheckbox
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
              <OrangeCheckbox
                type="radio"
                value="imperial"
                checked={checked === "imperial"}
                onChange={handleCheckedChange}
              />
              F
            </label>
          </li>
        </ul>
      </Card>
      <section className="settings__footer">
        <div className=" settings__container">
          <Link
            className="settings__button-link"
            to={{
              pathname: "/"
            }}
          >
            <Button
              className={classes.backBtn}
              variant="contained"
              size="small"
            >
              <KeyboardBackspace style={{ marginLeft: "5px" }} />
              Powrót
            </Button>
          </Link>
          <Button
            className={classes.saveBtn}
            variant="contained"
            size="small"
            onClick={handleSaveClick}
          >
            Zapisz
            <Done style={{ marginLeft: "5px" }} />
          </Button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Settings;
