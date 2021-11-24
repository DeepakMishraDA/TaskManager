import React from "react";

import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  buttonStyle: {
    background: "white",
    color: "blue",
    border: "solid",
    borderRadius: "10%",
    paddingLeft: "20px",
    paddingRight: "20px",
    "&:hover": {
      background: "orange",
    },
  },
});

function Buttons({ label, onButtonclick }) {
  const classes = useStyles();
  return (
    <Button className={classes.buttonStyle} onClick={onButtonclick}>
      {label}
    </Button>
  );
}

export default Buttons;
