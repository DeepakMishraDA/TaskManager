import React from "react";
import Button from "./Button";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles({
  box: {
    border: "1px solid black",
  },
});

function TaskContainer({ tasks, id }) {
  const classes = useStyles();

  const removeTask = () => {
    console.log("ID", id);
  };
  return (
    <Box className={classes.box}>
      <p>{tasks}</p>
      <Button label="X" onButtonclick={removeTask} />
    </Box>
  );
}

export default TaskContainer;
