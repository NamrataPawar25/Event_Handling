import React, { useReducer } from 'react'
import { initialState, reducer } from './countReducer'

const CounterComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}

export default CounterComponent