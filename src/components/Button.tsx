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

type BtnProps = {
  label: string 
  onButtonclick: (task: string) => void
};

function Buttons({ label, onButtonclick }:BtnProps) {
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
