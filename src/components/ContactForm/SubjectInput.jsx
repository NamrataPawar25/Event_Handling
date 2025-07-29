import React from 'react'

const SubjectInput = ({inputType, onChange, value}) => {
  return (
    <div>
      <input type={inputType} placeholder='Add subject' value={value} onChange={(e)=>onChange(e.target.value)}/>
    </div>
  )
}

export default SubjectInput