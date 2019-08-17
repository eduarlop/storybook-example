import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  const {
    children,
    className,
    icon,
    onClick
  } = props

  return (
    <button className={ `button ${className}` } onClick={onClick}>
      { icon ? <i>icon</i> : null }
      {children}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;