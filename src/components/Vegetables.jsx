import React from 'react'
import vegiesData from '../../vegiesData'
import { useState } from 'react';

const Vegetables = () => {
    const [vegies, setVegies]= useState(['karela','Turai','Kaddu'])
    console.log(vegiesData);
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Sr no</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Availability</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {vegiesData.map((vegs, index)=>(
                    <tr key={vegs.id}>
                        <td>{index+1}</td>
                        <td>{vegs.name}</td>
                        <td>{vegs.price}</td>
                        <td>{vegs.quantity > 0 ?(<p>Available</p>) : (<p>Not Available</p>)}</td>
                        <td><button style={{display: "flex", alignItems: "center"}}><img src={vegs.image} alt={vegs.name} style={{width: "60px", height: "60px", marginRight: "20px"}} />Buy Now</button></td>

                    </tr>
                ))}
            </tbody>
        </table>
        <ul>
            {vegies.map((veg,index)=> (
                <li key={index}>{veg}</li>
            ))}
        </ul>
    </div>
  )
}

export default Vegetables