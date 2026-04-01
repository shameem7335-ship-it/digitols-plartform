
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import GetStart from './Components/GetStart/GetStart'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing/Pricing'
import Products from './Components/Products/Products'



function App() {

    const [cartItem, setCartItem] =useState([])




  return (
    <div>
      <Navbar  cartItem={cartItem}></Navbar>
      <Banner></Banner>
      <Products cartItem={cartItem} setCartItem={setCartItem}></Products>
     
    </div>
  )
}

export default App
