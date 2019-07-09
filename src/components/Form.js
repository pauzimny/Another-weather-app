import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Search from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "50%",
    alignSelf: "flex-end",
    color: "#ff680c"
  },
  input: {
    "&::after": {
      borderBottom: "3px solid #ff680c"
    }
  },

  addButton: {
    backgroundColor: "#ff670e",
    marginTop: "20px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#960c27"
    }
  }
}));

const Form = props => {
  const classes = useStyles();
  return (
    <form className="form" onSubmit={props.submit}>
      <TextField
        id="standard-with-placeholder"
        label="Nazwa miasta"
        placeholder=""
        className={classes.textField}
        margin="normal"
        value={props.value}
        onChange={props.change}
        InputProps={{ className: classes.input }}
        InputLabelProps={{
          style: {
            color: "#ff680c"
          }
        }}
      />
      <Button
        variant="contained"
        size="medium"
        className={classes.addButton}
        onClick={props.submit}
      >
        Dodaj miasto
        <Search style={{ marginLeft: "5px" }} />
      </Button>
    </form>
  );
};

export default Form;
