import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Shop from './Components/Shop'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Login from './Components/Login'
import SingleProductItem from './Components/SingleProductItem'

import Cart from './Components/Cart'
import { CartProvider } from './Components/CartContext'
import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'
import SearchBar from './Components/SearchBar'

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <>
      <Router>
        <CartProvider>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/Shop" element={<Shop />}></Route>
            <Route exact path="/Blog" element={<Blog />}></Route>
            <Route exact path="/Contact" element={<Contact />}></Route>
            <Route exact path="/Login" element={<Login />}></Route>
            <Route exact path="/SearchBar" element={<SearchBar />}></Route>
            <Route exact path="/Cart" element={<Cart />}></Route>
            <Route exact path="/products/:productId" element={<SingleProductItem />}></Route>
          </Routes>
        </CartProvider>
      </Router>
    </>
  )
}
