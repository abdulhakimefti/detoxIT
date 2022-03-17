import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FooterMain from "../../Shared/Footer/FooterMain";
import NavMain from "../../Shared/Navbar/NavMain/NavMain";
import "../Register/Register.css";
import loginImage from "../../../Media/loginImage.png";

const LogIn = () => {
  return (
    <div>
      <NavMain />
      <div>
        <div className="loginContainer">
          <Grid container>
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
                    <h1>Login</h1>
                    <p>Welcome! Thank you for coming back </p>

                    <form className="flex-c formLogin">
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

                      <input className="btn" type="submit" value="Login" />
                      <span className="extra-line">
                        <span>New to here?</span>
                        <Link to="/register">Register</Link>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid md={7}> 
            <div className="logInImageDiv">
              <img className="logInImage"  src={loginImage} alt='loginImage'/>
            </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <FooterMain />
    </div>
  );
};

export default LogIn;
