import "./App.css";

import { useState } from "react";

import HeadContainer from "./components/HeadContainer";
import TaskContainer from "./components/TaskContainer";

function App() {
  const [todos, setTodo] = useState([]);

  const todoHandler = (task) => {
    //the func will auto access event.target.value and then this set it into the copytodos array
    const copytodos = [...todos, task];
    setTodo(copytodos);
  };
  const todoRemover = (id) => {
    //the func will auto access event.target.value and then this set it into the copytodos array
    //console.log("See", task);
    console.log("Now See", id.target.value);
    const copytodos = [...todos];
    const filteredTodos = copytodos.filter((text) => {
      return text !== id.target.value;
    });
    setTodo(filteredTodos);
  };

  return (
    <div className="App">
      <HeadContainer updateTodo={todoHandler} todos={todos} />
      {todos.map((tasks, index) => {
        //console.log(index);
        return (
          <TaskContainer tasks={tasks} id={tasks} removeTask={todoRemover} />
        );
      })}
    </div>
  );
}

export default App;
