import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About/About";
import Blog from "./Pages/Blog/Blog/Blog";
import Gallery from "./Pages/Gallery/Gallery/Gallery";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Services/Services/Services";
import Courses from "./Pages/Services/Courses/Courses";
import SoftSkill from "./Pages/Services/SoftSkill/SoftSkill";
import WebDev from "./Pages/Services/WebDev/WebDev";
import DigitalContent from "./Pages/Services/DigitalContent/DigitalContent";
import ComputerEquip from "./Pages/Services/ComputerEquip/ComputerEquip";
import DesignService from "./Pages/Services/DesignService/DesignService";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/computerequip' element={<ComputerEquip/>}/>
        <Route path="/designservices" element={<DesignService/>}/>
        <Route path='/digitalcontent' element={<DigitalContent/>}/>
        <Route path ='/webdev' element={<WebDev/>}/>
        <Route path='/softskill' element={<SoftSkill/>}/>
        <Route path='/courses' element={<Courses/>}/>
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
