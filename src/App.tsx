import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About/About";
import Blog from "./Pages/Blog/Blog/Blog";
import Gallery from "./Pages/Gallery/Gallery/Gallery";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Services/Services/Services";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
    
      </Routes>
    </div>
  );
}

export default App;
