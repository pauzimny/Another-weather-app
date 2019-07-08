import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import Settings from "@material-ui/icons/Settings";
import { makeStyles } from "@material-ui/core/styles";

// const Options = () => {
//   return (
//     <div className="options__container">
//       <Link to="/settings">
//         <button className="options__button">
//           <FontAwesomeIcon style={{ paddingRight: "5px" }} icon="cog" />
//           Ustawienia
//         </button>
//       </Link>
//     </div>
//   );
// };
// const useStyles = makeStyles({
//   optionsBtn: {
//     textDecoration: "none"
//   }
// });

const useStyles = makeStyles({
  optionsBtn: {
    backgroundColor: "#fff",
    color: "#222",
    "&:hover": {
      backgroundColor: "#e5d1c5"
    }
  }
});
const Options = () => {
  const classes = useStyles();
  // const classes = useStyles();
  return (
    <div className="options__container">
      <Link style={{ textDecoration: "none" }} to="/settings">
        {/* <button className="options__button"> */}
        <Button
          variant="contained"
          size="medium"
          className={classes.optionsBtn}
        >
          Ustawienia
          <Settings style={{ marginLeft: "5px" }} />
        </Button>
        {/* </button> */}
      </Link>
    </div>
  );
};

export default Options;
