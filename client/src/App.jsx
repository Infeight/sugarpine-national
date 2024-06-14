
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home.jsx';
import Destinations from './components/destinations.jsx';
import Contacts from './components/Contacts.jsx';
import Blog from './components/Blog.jsx';
import About from './components/About.jsx';
import './App.css'

function App() {

 

    return(
        <BrowserRouter>
        
        <Routes>

        
           <Route path='/' element={<Home/>}/>
           <Route path='/destinations' element={<Destinations/>}/>
           <Route path='/contacts' element={<Contacts/>}/>
           <Route path='/blog' element={<Blog/>}/>
           <Route path='/about' element={<About/>}/>
      
        </Routes>

        </BrowserRouter>
    )
}
  



export default App
