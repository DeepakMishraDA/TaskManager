import React from "react";

import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  buttonStyle: {
    background: "lightblue",
    color: "blue",
    border: "solid",
    borderRadius: "10%",
    paddingLeft: "50px",
    paddingRight: "50px",
    marginTop: "20px",
    "&:hover": {
      background: "purple",
    },
  },
});

function Buttons({ label, onButtonclick }) {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.buttonStyle} onClick={onButtonclick}>
        {label}
      </Button>
    </div>
  );
}

export default Buttons;
