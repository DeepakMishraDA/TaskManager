import { React, useState } from "react";

import Header from "./Header";
import Input from "./Input";
import Button from "./Button";

function HeadContainer() {
  const [inputValue, setInput] = useState("type here...");

  const inputHandler = (value) => {
    console.log(value.target.value);
    setInput(value.target.value);
  };

  return (
    <div>
      <Header title="Task-manager" />
      <Input inputValue={inputValue} inputHandler={inputHandler} />
      <Button label="Add" />
    </div>
  );
}

export default HeadContainer;
