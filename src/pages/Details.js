import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  backBtn: { backgroundColor: "#fff", marginRight: 0 },
  detailsCard: {
    margin: "10px auto",
    width: "80%",
    flexGrow: 1
  }
});

const Details = ({ match }) => {
  const classes = useStyles();
  const cities = JSON.parse(localStorage.getItem("cities"));
  const index = cities.findIndex(city => city.id === match.params.id);

  return (
    <div className="details">
      <Card raised={true} className={classes.detailsCard}>
        <h2 className="details__city">{cities[index].id}</h2>
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
      </Card>
      <section className="settings__footer">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "5%"
          }}
        >
          <Link
            className="details__link"
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
        </div>
      </section>
    </div>
  );
};

export default Details;
