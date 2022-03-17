import React from "react";
import FooterMain from "../../Shared/Footer/FooterMain";
import NavMain from "../../Shared/Navbar/NavMain/NavMain";
import "./Register.css";
import registerBg from "../../../Media/registerBg.png";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import loginImage from "../../../Media/loginImage.png";

const Register = () => {
  return (
    <div>
      <NavMain />
      <div>
        <div className="registerContainer">
          <Grid container>
            <Grid md={7}>
            <div className="registerImageDiv">
              <img className="logInImage"  src={loginImage} alt='loginImage'/>
            </div>
            </Grid>
            <Grid md={5}>
              {" "}
              <div className=" flex-r container">
                <div className="flex-r login-wrapper">
                  <div className="login-text">
                    <div className="logo">
                      <span>
                        <i className="fab fa-speakap"></i>
                      </span>
                    </div>
                    <h1>Register</h1>
                    <p>Grow With Detox</p>

                    <form className="flex-c formLogin">
                      <div className="input-box">
                        {/* <span className="label">E-mail</span> */}
                        <div className=" flex-r input">
                          <input
                            className="logInInput"
                            type="text"
                            placeholder="Name"
                          />
                          <i className="fas fa-at"></i>
                        </div>
                      </div>
                      <div className="input-box">
                        {/* <span className="label">E-mail</span> */}
                        <div className=" flex-r input">
                          <input
                            className="logInInput"
                            type="text"
                            placeholder="Email"
                          />
                          <i className="fas fa-at"></i>
                        </div>
                      </div>
                      <div className="input-box">
                        {/* <span className="label">E-mail</span> */}
                        <div className=" flex-r input">
                          <input
                            className="logInInput"
                            type="text"
                            placeholder="Phone no"
                          />
                          <i className="fas fa-at"></i>
                        </div>
                      </div>
                      <div className="input-box">
                        {/* <span className="label">Password</span> */}
                        <div className="flex-r input">
                          <input
                            className="logInInput"
                            type="password"
                            placeholder="Password"
                          />
                          <i className="fas fa-lock"></i>
                        </div>
                      </div>

                      <div className="check">
                        <input
                          className="logInInput"
                          type="checkbox"
                          name=""
                          id=""
                        />
                        <span>
                          I've read and agree with{" "}
                          <Link to="/termscondition">Terms & Conditions</Link>{" "}
                        </span>
                      </div>

                      <input className="btn" type="submit" value="Register" />
                      <span className="extra-line">
                        <span>Already have an account?</span>
                        <Link to="/login">Login</Link>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <FooterMain />
    </div>
  );
};

export default Register;
