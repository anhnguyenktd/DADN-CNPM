import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Cart  from '../pages/Cart'
import Contact from '../pages/Contact'
import CheckOut from '../pages/CheckOut'
import FoodDetails from '../pages/FoodDetails'
import Home from '../pages/Home'
import AllFoods from '../pages/AllFoods'
import Login from '../components/Authentication/Login/Login'
import Register from '../components/Authentication/Register/Register'
import Reset from '../components/Authentication/Reset/Reset'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/foods/' element={<AllFoods/>}/>
        <Route path='/foods/:id' element={<FoodDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset" element={<Reset />} />
    </Routes>
  )
}

export default Routers