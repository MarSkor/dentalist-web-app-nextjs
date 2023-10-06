"use client"
import React, { useState } from 'react'


export const FormSelect = (props) => {
  return (
    <div className="form__field">
      <label className="form__select-label">
        {props.label}
        <select value={props.value} onChange={props.onChange}>
          {props.options.map((option, i) => (
            <option key={i} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
}


export const FormTextArea = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value
    setInputValue(newValue);
    if (props.onChange) props.onChange(newValue);
  };
  
  return(
    <div className="form__field">
      <label className="form__field--label">Message</label>
      <textarea 
      className={props.className}
      id={props.id} 
      rows={props.rows || 3} 
      value={inputValue}
      onChange={handleChange}
      placeholder="Enter your message..."
      />
    </div>
  )
}

const FormInput = (props) => {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState('');


  const handleChange = (e) => {
    const newValue = e.target.value
    setInputValue(newValue);
    if (props.onChange) props.onChange(newValue);
  };


  return (
    <div className="form__field">
      <label className="form__field--label" htmlFor="input-form">
        {props?.title? props.title : "Untitled input"} &nbsp; 
      </label>
      <input 
        className={props.className}
        type={inputType}
        value={inputValue}
        name="input-form"
        onChange={handleChange}
        placeholder={props?.placeholder}
        autoComplete={props?.autocomplete ? props.autocomplete : "off"}
      />
    </div>
  )
}

export default FormInput