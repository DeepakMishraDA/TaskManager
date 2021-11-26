import "./App.css";

import { useState } from "react";

import HeadContainer from "./components/HeadContainer";
import TaskContainer from "./TaskContainer";

function App() {
  const [todos, setTodo] = useState([]);

  const todoHandler = (task) => {
    //the func will auto access event.target.value and then this set it into the copytodos array
    console.log("See", task);
    const copytodos = [...todos, task];
    setTodo(copytodos);
  };
  const todoRemover = (id) => {
    //the func will auto access event.target.value and then this set it into the copytodos array
    //console.log("See", task);
    const copytodos = [...todos];
    const filteredTodos = copytodos.filter((text) => {
      return text !== id;
    });
    setTodo(filteredTodos);
  };

  return (
    <div className="App">
      <HeadContainer updateTodo={todoHandler} todos={todos} />
      {todos.map((tasks, index) => {
        //console.log(index);
        return (
          <TaskContainer
            tasks={tasks}
            id={tasks}
            removeTask={(id) => todoRemover(id)}
          />
        );
      })}
    </div>
  );
}

export default App;
