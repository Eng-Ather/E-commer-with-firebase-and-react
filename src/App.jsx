
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/home";
import Header from "./pages/hader";
import Product from './pages/product';
import SignIn from "./pages/signin";
import Signup from "./pages/signup";
import ProductDetail from './pages/productDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <>         
        <h1 className="text-3xl font-bold underline text-orange-500">Vite + React</h1>
      </> */}

      <BrowserRouter>
  
      <Header/>
      
      <Routes>
      <Route path="/" element={<Product/>}/>


        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Product/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<Signup/>}/>

        {/* <Route path="/products/:id" element={<ProductDetail/>}/> */}
      </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App

