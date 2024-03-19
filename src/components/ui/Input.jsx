import React from "react";

const Input = ({ className, handlerClick, props }) => {
  return <input className={className} onClick={handlerClick} {...props} />;
};

export default Input;
