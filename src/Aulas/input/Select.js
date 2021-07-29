import React from 'react'

const Select = ({ options, title, value, setValue }) => {
  return (
    <>
      <p>{title}</p>
      <select value={value} onChange={({ target }) => setValue(target.value)}>
        <option value="" disabled>Selecione</option>
        {options.map(option => <option key={option} value={option}>{option}</option>)}

      </select>
    </>
  )
}

export default Select
