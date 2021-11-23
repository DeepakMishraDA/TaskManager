import React from "react";
import Button from "./Button";

function TaskContainer({ task }) {
  return (
    <div>
      {task.map((item) => {
        //console.log(item);
        return (
          <div>
            <p>{item}</p>
            <Button label="X" />
          </div>
        );
      })}
    </div>
  );
}

export default TaskContainer;
