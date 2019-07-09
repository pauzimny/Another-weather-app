import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Settings from "@material-ui/icons/Settings";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  optionsBtn: {
    backgroundColor: "#fff",
    color: "#222",
    "&:hover": {
      backgroundColor: "#ebebeb"
    }
  }
});
const Options = () => {
  const classes = useStyles();

  return (
    <div className="options__container">
      <Link style={{ textDecoration: "none" }} to="/settings">
        <Button
          variant="contained"
          size="medium"
          className={classes.optionsBtn}
        >
          Ustawienia
          <Settings style={{ marginLeft: "5px" }} />
        </Button>
      </Link>
    </div>
  );
};

export default Options;
