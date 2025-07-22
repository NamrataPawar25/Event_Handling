import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleIncrement(){
    setCount(count+1)
  }
  const handleDecrement=()=>{
    setCount(count-1)
  }

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button style={{marginLeft:"10px"}} onClick={handleIncrement}>Increment by Function</button>
      <button style={{marginLeft:"10px"}} onClick={() => setCount(count - 1)}>Decrement</button>
      <button style={{marginLeft:"10px"}} onClick={handleDecrement}>Decrement by Function</button>
    </div>
  );
};

export default Counter;
