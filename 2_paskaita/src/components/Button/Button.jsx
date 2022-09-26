import React from "react";
import "./Button.css";

//                                       => ( JSX ), JS
//                                       => { return (JSX) }
const Button = ({ text, type, bgColor }) => (
  <div className="button-wrapper">
    <button type={type} className="button" style={{ backgroundColor: bgColor }}>
      {text}
    </button>
  </div>
);

export default Button;
