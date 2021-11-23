import React from "react";
import Button from "./Button";

function TaskContainer({ task }) {
  return (
    <div>
      {task.map((item) => {
        return <p>item</p>;
      })}
      <Button label="X" />
    </div>
  );
}

export default TaskContainer;
