import React from 'react'
import HeroSection from './Components/HeroSection'
import NavBar from './Components/NavBar'
import Dishes from './Components/Dishes'
import About from './Components/About'
import Gallary from './Components/Gallary'
import Expertise from './Components/Expertise'
import Review from './Components/Review'
import Contact from './Components/Contact'
import Softdrinks from './Components/Softdrink/Softdrinks'

import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      
       <NavBar/>
       <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/dishes' element={<Dishes/>}/>
        <Route path='/drink' element={<Softdrinks/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Gallary' element={<Gallary/>}/>
        <Route path='/expertise' element={<Expertise/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/contact' element={<Contact/>}/>
       </Routes>
       
    </main>
  )
}

export default App

