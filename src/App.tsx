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

import DigitalContent from "./Pages/Services/DigitalContent/DigitalContent";
import ComputerEquip from "./Pages/Services/ComputerEquip/ComputerEquip";
import DesignService from "./Pages/Services/DesignService/DesignService";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import WebDevelop from "./Pages/Services/WebDevelop/WebDevelop";
import LoadingIcon from "./Pages/Shared/LoadingIcon/LoadingIcon";
import LogIn from "./Pages/Authentication/LogIn/LogIn";
import Register from "./Pages/Authentication/Register/Register";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/register' element={<Register/>}/>
        <Route path='/computerequip' element={<ComputerEquip/>}/>
        <Route path="/designservices" element={<DesignService/>}/>
        <Route path='/digitalcontent' element={<DigitalContent/>}/>
        <Route path ='/webdev' element={<WebDevelop/>}/>
        <Route path='/softskill' element={<SoftSkill/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
      {/* <LoadingIcon/> */}
    </div>
  );
}

export default App;
