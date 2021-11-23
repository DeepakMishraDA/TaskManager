import { React, useState } from "react";

import Header from "./Header";
import Input from "./Input";
import Button from "./Button";

function HeadContainer() {
  const [inputValue, setInput] = useState("type here...");

  return (
    <div>
      <Header title="Task-manager" />
      <Input inputValue={inputValue} />
      <Button />
    </div>
  );
}

export default HeadContainer;
