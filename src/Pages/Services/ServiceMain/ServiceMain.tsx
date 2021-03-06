import React from "react";
import "./ServiceMain.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import itTraining from "../../../Media/online-learning.png";
import softSkill from "../../../Media/ability.png";
import web from "../../../Media/software-development.png";
import digital from "../../../Media/bullhorn.png";
import grapic from "../../../Media/vector.png";
import equipment from "../../../Media/laptop.png";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
const ServiceMain = () => {
  return (
    <div
      style={{
        margin: "110px 0 50px 0",
        display: "flex",
        justifyContent: "center",
       
      }}
    >
      <div>
        {" "}
        <h1 className="service-title">Our Services</h1>{" "}
        <Grid container className="services">
       
          
            {" "}<Grid xs={12} md={4} sm={6}>
            
            <div className="services__box">
              <figure
                className="services__icon"
                style={{ backgroundColor: "#4eb7ff" }}
              >
                <img src={itTraining} alt="itTraining"></img>
              </figure>
              <div className="services__content">
                <h2 className="services__title">Courses</h2>
                <p className="services__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                  ipsum nemo. Vel consequuntur ratione laborum.
                </p>
                <Link to="/courses"><Button> <ArrowForwardIosIcon className='icon-ion'
                  style={{ color: "white",  }}
                ></ArrowForwardIosIcon></Button>    </Link>
              </div>
            </div>
            </Grid>
            <Grid xs={12} md={4} sm={6}>
            <div className="services__box">
              <figure
                className="services__icon"
                style={{ backgroundColor: "#fd6494" }}
              >
                {/* <ion-icon name="code-slash-outline"></ion-icon> */}
                <img src={softSkill} alt="itTraining"></img>
              </figure>
              <div className="services__content">
                <h2 className="services__title">Soft Skill Training</h2>
                <p className="services__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                  ipsum nemo. Vel consequuntur ratione laborum.
                </p>{" "}
                <Link to="/softskill"><Button> <ArrowForwardIosIcon className='icon-ion'
                  style={{ color: "white",  }}
                ></ArrowForwardIosIcon></Button>    </Link>
              </div>
            </div>
            </Grid>
            {" "}<Grid xs={12} md={4} sm={6}>
            <div className="services__box">
              <figure
                className="services__icon"
                style={{ backgroundColor: "#43f390" }}
              >
                <img src={web} alt="itTraining"></img>
              </figure>
              <div className="services__content">
                <h2 className="services__title">Web Development</h2>
                <p className="services__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                  ipsum nemo. Vel consequuntur ratione laborum.
                </p>{" "}
                <Link to="/webdev"><Button> <ArrowForwardIosIcon className='icon-ion'
                  style={{ color: "white", }}
                ></ArrowForwardIosIcon></Button>    </Link>
              </div>
            </div>
            </Grid>
            {" "}<Grid xs={12} md={4} sm={6}>
            <div className="services__box">
              <figure
                className="services__icon"
                style={{ backgroundColor: "#ffb508" }}
              >
                <img src={digital} alt="itTraining"></img>
              </figure>
              <div className="services__content">
                <h2 className="services__title">Digital Content Service</h2>
                <p className="services__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                  ipsum nemo. Vel consequuntur ratione laborum.
                </p>{" "}
                <Link  to="/digitalcontent"><Button> <ArrowForwardIosIcon className='icon-ion'
                  style={{ color: "white",  }}
                ></ArrowForwardIosIcon></Button>    </Link>
              </div>
            </div>
            </Grid>
            {" "}   <Grid xs={12} md={4} sm={6}>
            <div className="services__box">
              <figure
                className="services__icon"
                style={{ backgroundColor: "#37ba82" }}
              >
                <img src={grapic} alt="itTraining"></img>
              </figure>
              <div className="services__content">
                <h2 className="services__title">Design Solution</h2>
                <p className="services__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                  ipsum nemo. Vel consequuntur ratione laborum.
                </p>{" "}
                <Link to="/designservices"><Button> <ArrowForwardIosIcon className='icon-ion'
                  style={{ color: "white", }}
                ></ArrowForwardIosIcon></Button>    </Link>
              </div>
            </div>
            </Grid>
            {" "}
           <Grid xs={12} md={4} sm={6}>
           <div className="services__box">
              <figure
                className="services__icon"
                style={{ backgroundColor: "#cd57ff" }}
              >
                <img src={equipment} alt="itTraining"></img>
              </figure>
              <div className="services__content">
                <h2 className="services__title">Computer Equipment Service</h2>
                <p className="services__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                  ipsum nemo. Vel consequuntur ratione laborum.
                </p>{" "}
                <Link to="/computerequip"><Button> <ArrowForwardIosIcon className='icon-ion'
                  style={{ color: "white" }}
                ></ArrowForwardIosIcon></Button>    </Link>
              </div>
            </div>
             </Grid>
            </Grid>
        </div>
    
    </div>
  );
};

export default ServiceMain;
