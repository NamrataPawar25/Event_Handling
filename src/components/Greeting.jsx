import React from 'react'

const Greeting = (props) => {
  return (
    <div>
        <h1>Hello {props.sName}</h1>
        <p>You Got {props.marks} Marks</p>
    </div>
  )
}

export default Greeting