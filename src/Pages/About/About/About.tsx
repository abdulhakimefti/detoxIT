import React from "react";
import Footer from "../../Shared/Footer/Footer";
import FooterMain from "../../Shared/Footer/FooterMain";
import NavMain from "../../Shared/Navbar/NavMain/NavMain";
import AboutUs from "../AboutUs/AboutUs";
import CeoIntro from "../CeoIntro/CeoIntro";
import Journey from "../Journey/Journey";
import OtherIntro from "../OtherIntro/OtherIntro";

import "./About.css";

const About = () => {
  return (
    <div>
      <NavMain></NavMain>
      <div>
        <AboutUs></AboutUs>
        <CeoIntro></CeoIntro>
        <OtherIntro></OtherIntro>
        <Journey></Journey>
      </div>

      <FooterMain></FooterMain>
    </div>
  );
};

export default About;
