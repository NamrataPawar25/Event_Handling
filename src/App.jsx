import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import GreetingClassBased from './components/GreetingClassBased'
import { Product } from './components/Product'
import { Navbar } from './components/Navbar'
import Counter from "./components/Counter"
import ChangeHeading from './components/ChangeHeading'
import Calculator from './components/Calculator'
import Calc from './components/Calc'


function App() {
  return (
    <>
    <Calc/>
    <Counter/>
    <Calculator/>
      <ChangeHeading/>
      <Greeting sName="Namrata" marks={90}></Greeting>
      <Greeting sName="Amruta" marks={95}></Greeting>
      <GreetingClassBased sName="Namrata" />
      <GreetingClassBased sName="Amruta" />
      <Navbar />
      <h1 className='heading'>Products</h1>
      <div className='prodDiv'>
        <Product
          prod={{
            name: "iPhone 17 Pro",
            brand: "Apple",
            price: 23456,
            inStock: true,
            color: "Blue",
            image: "https://m.media-amazon.com/images/I/71d7rfSl0wL.jpg",
          }
          }
        />
        <Product
          prod={{
            name: "iPhone 17 Pro",
            brand: "Apple",
            price: 23456,
            inStock: true,
            color: "Pink",
            image: "https://m.media-amazon.com/images/I/71v2jVh6nIL._SX679_.jpg",
          }
          }
        />
        <Product
          prod={{
            name: "iPhone 17 Pro",
            brand: "Apple",
            price: 23456,
            inStock: true,
            color: "Yellow",
            image: "https://m.media-amazon.com/images/I/71REplb5oZL._SX679_.jpg",
          }
          }
        />
        <Product
          prod={{
            name: "iPhone 17 Pro",
            brand: "Apple",
            price: 23456,
            inStock: true,
            color: "Green",
            image: "https://m.media-amazon.com/images/I/71nvkHnPpZL._SX679_.jpg",
          }
          }
        />
      </div>
    </>
  )
}

export default App
