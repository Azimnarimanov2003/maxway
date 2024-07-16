import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import About from './Pages/AboutPage/About'
import Branch from './Pages/BranchPage/Branch'
import Contact from './Pages/ContactPage/Contact'
import Footer from './Components/Footer/Footer'
import Lavash from './Foods/Lavash/Lavash/Lavash'
import Burger from './Foods/Lavash/Burger/Burger'
import Desert from './Foods/Lavash/Desert/Desert';
import Drink from './Foods/Lavash/Drink/Drink'
import Free from './Foods/Lavash/Free/Free'
import Pizza from './Foods/Lavash/Pizza/Pizza'
import Xotdok from './Foods/Lavash/Xotdok/Xotdok'
import Navbar from './Components/Navbar/Navbar'
import Foodsmenu from './Foodsmenu'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Foodsmenu />}>
          <Route path='/' element={<Lavash />}></Route>
          <Route path='/desert' element={<Desert />} />
          <Route path='/burger' element={<Burger />} />
          <Route path='/drink' element={<Drink />} />
          <Route path='/free' element={<Free />} />
          <Route path='/pizza' element={<Pizza />} />
          <Route path='/xotdok' element={<Xotdok />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/branch' element={<Branch />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
