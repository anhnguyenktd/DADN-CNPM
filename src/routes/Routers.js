import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Menu from '../pages/Menu'
import Cart  from '../pages/Cart'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CheckOut from '../pages/CheckOut'
import MenuDetails from '../pages/MenuDetails'
import Home from '../pages/Home'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/menu/:id' element={<MenuDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default Routers