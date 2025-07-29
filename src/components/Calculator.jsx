import React, { useState } from 'react'

const Calculator = () => {
    const [result, setResult] = useState(0)
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    function addition() {
        setResult(Number(n1) + Number(n2))
    }
    function substraction() {
        setResult(Number(n1) - Number(n2))

    }
    function multiplication() {
        setResult(Number(n1) * Number(n2))

    }
    function division() {
        if (n2 == 0) {
            setResult("can't divide by Zero")
        } else {
            setResult(Number(n1) / Number(n2))
        }
    }
    return (
        <div style={{margin: "20px"}}>
            <input type="number" onChange={(e) => setN1(e.target.value)} />
            <input type="number" onChange={(e) => setN2(e.target.value)} />
            <div className="redFont" style={{margin: "10px"}}>{result}</div>
            <button onClick={addition} style={{margin:"5px"}}>+</button>
            <button onClick={substraction} style={{margin:"5px"}}>-</button>
            <button onClick={multiplication} style={{margin:"5px"}}>*</button>
            <button onClick={division} style={{margin:"5px"}}>/</button>
        </div>
    )
}

export default Calculator