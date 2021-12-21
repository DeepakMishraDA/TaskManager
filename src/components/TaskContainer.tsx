import React from "react";
import Button from "./Button";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles({
  box: {
    border: "1px solid black",
    marginBottom: "10px",
  },
});

type TcProps = {
  tasks: string
  id: string
  removeTask: (id: string) => void
 
};

function TaskContainer({ tasks, id, removeTask }: TcProps) {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <p>{tasks}</p>
      <Button label="X" onButtonclick={() => removeTask(id)} />
    </Box>
  );
}

export default TaskContainer;
