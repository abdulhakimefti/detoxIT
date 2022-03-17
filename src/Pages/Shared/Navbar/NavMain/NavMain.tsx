import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavMain.css";

const NavMain = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  // const hide = () => setOpen(false)

  console.log(open);
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
    <div style={{ marginBottom: "57px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar
            className="nav"
            style={{
              backgroundColor: "white",
              color: "#556270",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link
              style={{
                fontWeight: "900",
                marginLeft: "4%",
                fontSize: "28px",
                textDecoration: "none",
                color: "#556270",
              }}
              to="/"
            >
              DETOX IT
            </Link>
            <div
              className={`${open ? "hamburger toggle" : "hamburger"} `}
              onClick={toggle}
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <div className="navTwo">
              <div className={`${open ? "open nav-links" : "nav-links"}`}>
                <div className="navThree">
                  <div className={`${open ? "fade li" : "li"}`}>
                    <Link
                      to="/about"
                      className="pullDown pullDownColor"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      About{" "}
                    </Link>
                  </div>
                  <div className={`${open ? "fade li" : "li"}`}>
                    <Link
                      to="/services"
                      className="pullDown pullDownColor"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      Services{" "}
                    </Link>
                  </div>
                  <div className={`${open ? "fade li" : "li"}`}>
                    <Link
                      to="/news"
                      className="pullDown pullDownColor"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      News
                    </Link>
                  </div>
                  <div className={`${open ? "fade li" : "li"}`}>
                    <Link
                      to="/gallery"
                      className="pullDown pullDownColor"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      Gallery
                    </Link>
                  </div>
                  <div className="login-btn-div">
                  
                  <Link to='/login'>  <button  className="login-button">Login&#32;&#32;&#32;</button></Link>
                  </div>
                  <div className="btnDiv">
                  
                    <Link to='/register'>
                    <button className="join-button">Register</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavMain;
