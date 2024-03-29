import  React, { useState } from "react";

import Header from "./Header";
import Input from "./Input";
import Buttons from "./Button";
import TaskContainer from "./TaskContainer";

type HcProps = {
  updateTodo: (task: string) => void
  todos: string[]
  removeTodo: (id: string) => void
  removeAll: () => void
};

function HeadContainer({ updateTodo, todos, removeTodo, removeAll }: HcProps) {
  const [inputValue, setInput] = useState(" ");

  const inputHandler = (value: React.ChangeEvent<HTMLInputElement>) => {
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
      <Buttons label="Add" onButtonclick={()=> updateTodo(inputValue)} />
      {todos.map((task, index) => {
        console.log(index);
        return <TaskContainer tasks={task} id={task} removeTask={removeTodo} />;
      })}
      <Buttons onButtonclick={removeAll} label={"Remove-all"} />
    </div>
  );
}

export default HeadContainer;
