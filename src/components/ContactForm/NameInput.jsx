import React from 'react'

const NameInput = ({ inputType, onChange, value }) => {
  return (
    <div>
      <input type={inputType} placeholder='Add your name here' value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

export default NameInput