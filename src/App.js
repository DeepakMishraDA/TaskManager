import "./App.css";

import { useState } from "react";

import HeadContainer from "./components/HeadContainer";

function App() {
  const [todos, setTodo] = useState([]);

  const todoHandler = (task) => {
    console.log("See", task);
    const copytodos = [...todos, task];
    setTodo(copytodos);
  };

  return (
    <div className="App">
      <HeadContainer updateTodo={todoHandler} todos={todos} />
    </div>
  );
}

export default App;
