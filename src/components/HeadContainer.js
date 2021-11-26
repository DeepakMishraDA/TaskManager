import { React, useState } from "react";

import Header from "./Header";
import Input from "./Input";
import Buttons from "./Button";

function HeadContainer({ updateTodo, todos, tasks, removeTodo }) {
  const [inputValue, setInput] = useState(" ");

  const inputHandler = (value) => {
    //console.log(value.target.value);
    setInput(value.target.value); //the momemt u pass some input this func sets event.target.value to what u just passed
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
    </div>
  );
}

export default HeadContainer;
