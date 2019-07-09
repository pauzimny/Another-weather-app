import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    width: "100%",
    margin: "20px auto 20px -5%",
    padding: "0 5% 0 5%"
  },
  deleteBtn: {
    backgroundColor: "red",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#c51162"
    }
  },
  cityButton: {
    margin: theme.spacing(1),
    padding: "2px"
  }
}));

const Result = props => {
  const classes = useStyles();
  return props.city ? (
    <Card className={classes.card}>
      <li className="result">
        <Link
          className="result__city"
          to={{
            pathname: `/details/${props.city}`
          }}
        >
          <Button color="secondary" className={classes.cityButton}>
            {props.city}
          </Button>
        </Link>
        <span className="result__temp">
          {props.temp} {props.units !== "metric" ? "F" : "\u00b0C"}
        </span>

        <Button
          className={classes.deleteBtn}
          variant="contained"
          size="medium"
          onClick={() => props.delete(props.id)}
        >
          Usuń
          <DeleteIcon />
        </Button>
      </li>
    </Card>
  ) : null;
};

export default Result;
