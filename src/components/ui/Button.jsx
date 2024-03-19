import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, handleClick, children }) => {
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
