import { React, useState } from "react";

import Header from "./Header";
import Input from "./Input";
import Button from "./Button";
import TaskContainer from "./TaskContainer";

function HeadContainer({ updateTodo, todos }) {
  const [inputValue, setInput] = useState("");

  const inputHandler = (value) => {
    //console.log(value.target.value);
    setInput(value.target.value);
  };

  return (
    <div>
      <Header title="Task-manager" />
      <Input inputValue={inputValue} inputHandler={inputHandler} />
      <Button label="Add" onButtonclick={() => updateTodo(inputValue)} />
      {todos.map((tasks) => {
        return <TaskContainer tasks={tasks} />;
      })}
    </div>
  );
}

export default HeadContainer;
