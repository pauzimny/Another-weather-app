import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  backBtn: { backgroundColor: "#fff", marginRight: 0 },
  detailsCard: {
    margin: "10px auto",
    width: "80%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

const Error = () => {
  const classes = useStyles();
  return (
    <div className="details">
      <Card raised="true" className={classes.detailsCard}>
        <p style={{ fontWeight: "700", fontSize: "24px" }}>404</p>
        <p>Sorry,page not found!</p>
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

export default Error;
