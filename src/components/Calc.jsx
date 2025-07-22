import React, { useState } from 'react'

const calc = () => {
    const [heading, setheading]= useState("Full Stack Developer")
    const [result, setResult] =useState(0)
    const [n1, setN1]=useState()
    const [n2, setN2]=useState()

    function ChangeHeading(){
        setheading("MERN Stack Developer")
    }

    function addition(){
        setResult(Number(n1) + Number(n2))
    }
    function substraction(){
        setResult(Number(n1)- Number(n2))
    }
    function multiplication(){
        setResult(Number(n1)* Number(n2))
    }
    function division(){
        if(n2==0){
            setN2("Can't Divide By Zero")
        }
        else{
            setResult(Number(n1)/Number(n2))
        }
    }
  return (
    <>
    <div>
        <input type="number" onChange={(e)=>setN1(e.target.value)}/>
        <input type="number" onChange={(e)=>setN2(e.target.value)}/>
        <div>{result}</div>
        <button onClick={addition}>+</button>
        <button onClick={substraction}>-</button>
        <button onClick={multiplication}>*</button>
        <button onClick={division}>/</button>
    </div>
    <div>
        <h1>{heading}</h1>
        <button onClick={ChangeHeading}>Change Heading</button>
    </div>
    </>
  )
}

export default calc