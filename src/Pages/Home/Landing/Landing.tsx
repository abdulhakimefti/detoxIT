import { Typography } from "@mui/material";
import React from "react";
import illustration from "../../../Media/illustrations.png";
import "./landing.css"

const Landing = () => {
  return (
    <div style={{ marginTop: "57px" }}>
      <div style={{ backgroundColor: "#00706E", height: "300px" }}></div>
      <div style={{ backgroundColor: "#556270", height: "300px" }}></div>
      <div style={{ display: "flex", margin: "-525px 5% 94px 5%" }}>
        <div style={{ width: "50%" }}>
          <img className="img" src={illustration} />
        </div>
        <div style={{ width: "50%", color: "#fff" }}>
          <div>
            <h1 className='headingOne'>
              It’s never too late to learn!
            </h1>
          </div>
          <div className='details' style={{ margin: "120px 0 0 0", width: "100%" }}>
            <p className="loadingPara" >
              The smart way to manage lorem ipsum dolor sit amet consectetuer
              adipiscing
            </p>
            <p className="loadingPara2" >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit{" "}
            </p>
          </div>
        </div>
      </div>
      <div className='detailsRes' style={{ margin: "120px 0 0 0", width: "100%",color:'white' }}>
           <div style={{margin:'10%'}}> <p className="loadingPara" >
              The smart way to manage lorem ipsum dolor sit amet consectetuer
              adipiscing
            </p>
            <p className="loadingPara2" >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit{" "}
            </p></div>
          </div>
    </div>
  );
};

export default Landing;
