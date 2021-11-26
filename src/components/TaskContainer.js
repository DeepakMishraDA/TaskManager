import React from "react";
import Button from "./Button";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles({
  box: {
    border: "1px solid black",
  },
});

function TaskContainer({ tasks, id, removeTask }) {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <p>{tasks}</p>
      <Button label="X" onButtonclick={() => removeTask(id)} />
    </Box>
  );
}

export default TaskContainer;
