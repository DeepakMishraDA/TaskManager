import "./App.css";

import { useState } from "react";

import HeadContainer from "./components/HeadContainer";

function App() {
  const [todos, setTodo] = useState([]);

  const todoHandler = (task) => {
    //the func will auto access event.target.value and then this set it into the copytodos array
    //console.log("See", task);
    const copytodos = [...todos, task];
    setTodo(copytodos);
  };
  const todoRemover = (id) => {
    //the func will auto access event.target.value and then this set it into the copytodos array
    const copytodos = [...todos];
    const filteredTodos = copytodos.filter((text) => {
      if (text !== id) {
        return true;
      }
      return false;
    });
    setTodo(filteredTodos);
  };
  const removeAll = () => {
    setTodo([]);
  };

  return (
    <div className="App">
      <HeadContainer
        updateTodo={todoHandler}
        todos={todos}
        removeTodo={todoRemover}
        removeAll={removeAll}
      />
    </div>
  );
}

export default App;
