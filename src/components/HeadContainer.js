import { React, useState } from "react";

import Header from "./Header";
import Input from "./Input";
import Buttons from "./Button";
import TaskContainer from "./TaskContainer";

function HeadContainer({ updateTodo, todos }) {
  const [inputValue, setInput] = useState(" ");

  const inputHandler = (value) => {
    //console.log(value.target.value);
    setInput(value.target.value);
  };
  if (inputValue === " ") {
    return (
      <div>
        <Header title="Task-manager" />
        <Input inputValue={inputValue} inputHandler={inputHandler} />
        <Buttons
          label="Add"
          onButtonclick={() => {
            return alert("Please enter something!");
          }}
        />
      </div>
    );
  }
  return (
    <div>
      <Header title="Task-manager" />
      <Input inputValue={inputValue} inputHandler={inputHandler} />
      <Buttons label="Add" onButtonclick={() => updateTodo(inputValue)} />
      {todos.map((tasks, index) => {
        //console.log(index);
        return <TaskContainer tasks={tasks} />;
      })}
    </div>
  );
}

export default HeadContainer;
