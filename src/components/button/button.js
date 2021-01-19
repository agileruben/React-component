import React from "react";
import "./style.css";

const Button = ({ onClick, text }) => {
  return (
    <div className="container" onClick={onClick}>
      <p className="text">{text}</p>
    </div>
  );
};

export default Button;
