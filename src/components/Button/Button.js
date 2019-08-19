import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const { children, className, disabled, icon, onClick } = props;

  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon ? <i className={`buton__icon fas fa-${icon}`}></i> : null}
      {children}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
