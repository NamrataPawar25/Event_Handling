import React, { useState } from 'react'

const ChangeHeading = () => {
    const [heading, setheading]= useState("Learned HTML CSS Javascript")
    function handleChangeHeading(){
        setheading("Now learning ReactJS")
    }
  return (
    <div>
        <h1>{heading}</h1>
        <button onClick={handleChangeHeading}>Change Heading</button>
    </div>
  )
}

export default ChangeHeading