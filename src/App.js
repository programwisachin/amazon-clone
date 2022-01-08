import React from 'react';
import './App.css';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Cart from './features/Items/Cart';
import Category from './features/Items/Category';
import  Authenticate from './Authenticate';


function App() {
  return (
    <Router>
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/orders" element={<Cart/>} />
        <Route exact path="/electric" element={<Category type="electric"/>} />
        <Route exact path="/clothes" element={<Category type="clothes"/>} />
        <Route exact path="/grocery" element={<Category type="grocery"/>} />
        <Route exact path="/authenticate" element={< Authenticate />} />
      </Routes>
    </>
    </Router>
  );
}

export default App;
