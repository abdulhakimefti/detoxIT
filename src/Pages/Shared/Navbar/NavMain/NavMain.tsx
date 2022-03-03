import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavMain.css';



const NavMain = () => {
  const [open, setOpen]= useState(false);
  const toggle = () => setOpen(!open);
  // const hide = () => setOpen(false)



console.log(open)
// console.log(navIcon)
// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");

// hamburger.addEventListener('click', ()=>{
//    //Animate Links
//     navLinks.classList.toggle("open");
//     links.forEach(link => {
//         link.classList.toggle("fade");
//     });

//     //Hamburger Animation
//     hamburger.classList.toggle("toggle");
// });
// #556270


  return (
    <div >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar  position="fixed">
          <Toolbar className="nav" style={{backgroundColor:'white',color:'#556270',display:'flex',justifyContent:'space-between'}}>
              <Typography style={{fontWeight:'900',marginLeft:'4%',fontSize:"24px"}}>DETOX IT</Typography>
              <div className={`${open ? "hamburger toggle" : "hamburger"} `} onClick={toggle}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
            <div  style={{display:'flex',alignItems:'center',marginRight:'10%'}}>
            <div className={`${open ? "open nav-links" : "nav-links"}`} >
              <div className={`${open ? "fade" : "li"}`}style={{marginRight:'15px'}} >
              <Link  to="#" className="pullDown" style={{color:'#556270',textDecoration:'none', fontWeight:'700',cursor:"pointer"}}>About </Link>
              </div>
              <div className={`${open ? "fade" : "li"}`} style={{marginRight:'15px', }}>
              <Link to="#" className="pullDown" style={{color:'#556270',textDecoration:'none', fontWeight:'700',cursor:"pointer"}}>Services </Link>
              </div>
              <div className={`${open ? "fade" : "li"}`} style={{marginRight:'15px', }}>
              <Link to="#" className="pullDown" style={{color:'#556270',textDecoration:'none', fontWeight:'700',cursor:"pointer"}}>News</Link>
              </div>
                  <div className={`${open ? "fade" : "li"}`} style={{marginRight:'15px', }}>
              <Link to="#" className="pullDown" style={{color:'#556270',textDecoration:'none', fontWeight:'700',cursor:"pointer"}}>Gallery</Link>
              </div>
                  
              </div>
              <Button className="join-button" style={{display:'none',color:'white',backgroundColor:'#FF6B6B',padding:'8px 16px'}}>JOIN US</Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavMain;
