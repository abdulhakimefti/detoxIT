import React from "react";

import FooterMain from "../../Shared/Footer/FooterMain";

import NavMain from "../../Shared/Navbar/NavMain/NavMain";
import GalleryOne from "../GallerOne/GalleryOne";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <NavMain></NavMain>
      <div>

        <GalleryOne></GalleryOne>
      </div>
      
      <FooterMain></FooterMain>
    </div>
  );
};

export default Gallery;
