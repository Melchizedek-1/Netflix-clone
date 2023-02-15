import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './Screens/AboutUs'
import ContactUs from './Screens/ContactUs'
import HomeScreen from './Screens/HomeScreen'
import MoviesPage from './Screens/MoviesPage'
import NotFound from './Screens/NotFound'
import SingleMovie from './Screens/SingleMovie'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/movies' element={<MoviesPage />} />
      <Route path='/movie/:id' element={<SingleMovie />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App