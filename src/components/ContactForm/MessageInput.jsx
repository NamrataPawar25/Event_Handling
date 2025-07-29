import React from 'react'

const MessageInput = ({ onChange, value }) => {
  return (
    <div>
      <textarea placeholder='Add Message' value={value} onChange={(e) => onChange(e.target.value)}></textarea>
    </div>
  )
}

export default MessageInput