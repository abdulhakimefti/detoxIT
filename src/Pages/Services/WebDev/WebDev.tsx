import React from "react";
import FooterMain from "../../Shared/Footer/FooterMain";
import NavMain from "../../Shared/Navbar/NavMain/NavMain";
import SvgEcom from "./SvgDev/SvgEcom";
import SvgMainten from "./SvgDev/SvgMainten";
import SvgMobile from "./SvgDev/SvgMobile";
import SvgOne from "./SvgDev/SvgOne";
import SvgTwo from "./SvgDev/SvgTwo";
// import SvgUI from "./SvgDev/SvgUI";
import SvgWord from "./SvgDev/SvgWord";
import "./WebDev.css";
const WebDev = () => {
  return (
    <div>
      <NavMain></NavMain>
      <div style={{margin:"110px 0 50px 0"}}>
   
        <main className="wrapper">
        <h1 className="course-title">Web Development</h1>

          <div className="icon-wrap">
            {/* <!--Front End Development--> */}
            <div className="card">
              <h2>Front End Development</h2>
                <SvgOne/>
              <a href="#">See More</a>
            </div>

            {/* <!--UIUX Design--> */}
            {/* <div className="card">
              <h2>UIUX Design</h2>
    <SvgUI/>
              <a href="#">See More</a>
            </div> */}

            {/* <!--Web Applications--> */}
            <div className="card">
              <h2>Web Applications</h2>
              <SvgTwo/>
              <a href="#">See More</a>
            </div>

            {/* <!--ECommerce--> */}
            <div className="card">
              <h2>eCommerce Stores</h2>
              <SvgEcom/>
              <a href="#">See More</a>
            </div>

            {/* <!--Mobile Applications--> */}
            <div className="card">
              <h2>Mobile Applications</h2>
<SvgMobile/>
              <a href="#">See More</a>
            </div>

            {/* <!--Wordpress Websites--> */}
            <div className="card">
              <h2>WordPress Websites</h2>
<SvgWord/>
              <a href="#">See More</a>
            </div>

            {/* <!--Support & Maintenance--> */}
            <div className="card">
              <h2>Support & Maintenance</h2>
<SvgMainten/>
              <a href="#">See More</a>
            </div>
          </div>
        </main>
      </div>
      <FooterMain></FooterMain>
    </div>
  );
};

export default WebDev;
