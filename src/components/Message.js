import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  msgCard: {
    backgroundColor: "#960c27",
    padding: "0 10px"
  }
});

const Message = ({ msg }) => {
  const classes = useStyles();

  return (
    <Card className={classes.msgCard}>
      <div className="message">{msg}</div>
    </Card>
  );
};

export default Message;
