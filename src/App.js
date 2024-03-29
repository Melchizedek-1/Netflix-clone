import Aos from 'aos'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './Screens/AboutUs'
import ContactUs from './Screens/ContactUs'
import AddMovie from './Screens/Dashboard/Admin/AddMovie'
import Categories from './Screens/Dashboard/Admin/Categories'
import Dashboard from './Screens/Dashboard/Admin/Dashboard'
import MovieList from './Screens/Dashboard/Admin/MovieList'
import Users from './Screens/Dashboard/Admin/Users'
import FavoriteMovies from './Screens/Dashboard/FavoriteMovies'
import Password from './Screens/Dashboard/Password'
import Profile from './Screens/Dashboard/Profile'
import HomeScreen from './Screens/HomeScreen'
import Login from './Screens/Login'
import MoviesPage from './Screens/MoviesPage'
import NotFound from './Screens/NotFound'
import Register from './Screens/Register'
import SingleMovie from './Screens/SingleMovie'
import WatchPage from './Screens/WatchPage'
import ScrollOnTop from './ScrollOnTop'
import DrawerContext, { SidebarContext } from './Context/DrawerContext'

const App = () => {
    Aos.init();
  
  return (
    <DrawerContext>
        <ScrollOnTop>
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='/movies' element={<MoviesPage />} />
                <Route path='/movie/:id' element={<SingleMovie />} />
                <Route path='/watch/:id' element={<WatchPage />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/password' element={<Password />} />
                <Route path='/favorites' element={<FavoriteMovies />} />
                <Route path='/movieslist' element={<MovieList />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/users' element={<Users />} />
                <Route path='/addmovie' element={<AddMovie />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </ScrollOnTop>
    </DrawerContext>
  )
}

export default App