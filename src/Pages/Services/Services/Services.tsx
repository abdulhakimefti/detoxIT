import React from "react";

import FooterMain from "../../Shared/Footer/FooterMain";
import NavMain from "../../Shared/Navbar/NavMain/NavMain";
import ServiceMain from "../ServiceMain/ServiceMain";

import "./Services.css";

const Services = () => {
  return (
    <div>
      <NavMain></NavMain>
      <div>
        <ServiceMain></ServiceMain>
      </div>

      <FooterMain></FooterMain>
    </div>
  );
};

export default Services;
