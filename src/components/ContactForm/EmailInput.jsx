import React from 'react'

const EmailInput = ({inputType, onChange, value}) => {
  return (
    <div>
      <input type={inputType} placeholder='Add your email here' value={value} onChange={(e)=>onChange(e.target.value)} />
    </div>
  )
}

export default EmailInput