import React from "react";
import Button from "./Button";

function TaskContainer({ tasks }) {
  return (
    <div>
      <p>{tasks}</p>
      <Button label="X" />
    </div>
  );
}

export default TaskContainer;
