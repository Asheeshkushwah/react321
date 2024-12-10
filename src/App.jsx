import './App.css'
import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './component/page/Home'
import About from './component/page/About'
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
import Brand from './component/page/Brand'
import Pressrelease from './component/page/Pressrelease'
import Contact from './component/page/Contact'
import Carrier from './component/page/Carrier'
import Ourteam from './component/page/Ourteam'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>}></Route>     
      <Route path='/about'element={<About/>}></Route>
      <Route path='/brand'element={<Brand/>}></Route>
      <Route path='/pressrelease'element={<Pressrelease/>}></Route>
      <Route path='/contact'element={<Contact/>}></Route>
      <Route path='/carrier'element={<Carrier/>}></Route>
      <Route path='/ourteam'element={<Ourteam/>}></Route>


    </Routes>
    <Footer/>
    
    </>
  )
}

export default App