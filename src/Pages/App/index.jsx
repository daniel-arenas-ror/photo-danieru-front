import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { ShoppingCartProvider } from '../../Context';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import Home from "../Home"
import About from "../About"
import Navbar from '../../Components/Navbar';
import './App.css'

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
