import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import AllProducts from '../Pages/Products'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
    return (
        <div>
       <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/product" element={
        <PrivateRoute>

            <AllProducts></AllProducts>
        </PrivateRoute>
        
        }></Route>
       </Routes>

        </div>
    )
}

export {AllRoutes}