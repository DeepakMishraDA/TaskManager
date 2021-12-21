import React from "react";

type HdProps = {
  title: string
}
function Header({ title }:HdProps) {
  return (
    <div>
      <h1 className="h1">{title}</h1>
    </div>
  );
}

export default Header;
