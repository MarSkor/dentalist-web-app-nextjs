"use client"
import Select from "react-select";

const DropDownMenu = ({ title, items, placeholder, name}) => {

  return (
    <div className='form__field'>
      <label className='form__field--label' htmlFor={name}>{title}</label>
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder={placeholder}
        isClearable
        name={name}
        options={items}
      />
    </div>
  )
}

export default DropDownMenu