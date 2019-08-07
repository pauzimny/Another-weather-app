import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  resultHeader: {
    padding: "10px 0",
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    margin: "10px auto 0 auto",
    color: "#fff",
    backgroundColor: "#ff670e",
    fontWeight: 700,
    fontSize: "14px",
    [theme.breakpoints.up("md")]: {
      width: "90%"
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between"
    }
  }
}));

const ResultHeader = () => {
  const classes = useStyles();
  return (
    <Paper elevation={8} className={classes.resultHeader}>
      <span className="result-header__num">#</span>
      <span className="result-header__city">Nazwa miasta</span>
      <span className="result-header__temp">
        Średnia prognozowana temperatura
      </span>
      <span className="result-header__delete" />
    </Paper>
  );
};

export default ResultHeader;
