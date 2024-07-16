import React from 'react'
import FoodsMenu from './Components/FoodsMenu/FoodsMenu'
import { Outlet } from 'react-router-dom'
import Home from './Pages/HomePage/Home'

export default function Foodsmenu() {
  return (
    <div>
            <Home/>
            <FoodsMenu/>
            <Outlet/>
    </div>
  )
}
