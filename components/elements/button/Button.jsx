import React from 'react'

const Button = (props) => {
  const classNames = `btn btn--${props.variant} btn--${props.size}`;

  return (
    <button 
    type={props.type} 
    className={classNames}
    onClick={props.onClick}
    disabled={props.disabled}
    >
     {props.icon ? props.icon : ""} { props.children }
    </button>
  )
}

export default Button