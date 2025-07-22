import React from 'react'
import "./style.css"

export const Product = (props) => {
  const prod = props.prod
  console.log(prod);
  return (
    <>
      <div className='products'>
        <img src={prod.image} alt="Product Image" style={{ width: "100%" }} />
        <h2>{prod.name}</h2>
        <p>Brand Name: {prod.brand}</p>
        <p>₹ {prod.price}</p>
        <p style={{color:"black",fontWeight:"bold"}}>Instock</p>
        <p>Color: {prod.color}</p>
        <button>More Info</button>
      </div>
    </>
  )
}
