import React from "react";


type InProps = {
  inputHandler: (value: React.ChangeEvent<HTMLInputElement>) => void
  inputValue: string
}

function Input({ inputHandler, inputValue }:InProps) {
  return (
    <input
      className="input"
      placeholder="type something"
      type="text"
      onChange={inputHandler}
      value={inputValue}
    />
  );
}

export default Input;
