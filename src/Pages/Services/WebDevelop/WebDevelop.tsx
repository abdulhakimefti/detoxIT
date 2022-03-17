import React from 'react';
import FooterMain from "../../Shared/Footer/FooterMain";
import NavMain from "../../Shared/Navbar/NavMain/NavMain";
import {

  faEnvelopesBulk,
  faPencilRuler,
  faMapLocationDot,
  faFileVideo,
  faUserGear,
  faTableCells,
  faL,
  faPen,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Courses/Courses.css";
// import { tableCellClasses } from "@mui/material";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const WebDevelop = () => {
    return (
        <div>
      <NavMain></NavMain>
      <div className="courseContainer" style={{ margin: "110px 0 50px 0" }}>
        <div>
          <h1 className="course-title">Website packages</h1>{" "}
          <div className="services">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="box p-5" style={{ height: "400px" }}>
                    <FontAwesomeIcon
                      className="fas fa-laptop-code fa-3x mb-4"
                      style={{ color: "white" }}
                      icon={faL}
                    />{" "}
                    <h4 className="h4C" style={{ fontSize: "20px" }}>
                      LeaderShip
                    </h4>
                    <p className="pC">
                      Duis molestie enim mattis gravida viverra. Fusce ut eros
                      augue. Sed id mauris vel neque
                    </p>
                    <p className="pC">৳499</p>
                    <Link to='/' className="readmore">
                      <span className="spanC">Course Details</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="box p-5" style={{ height: "400px" }}>
                    <FontAwesomeIcon
                      className="fas fa-laptop-code fa-3x mb-4"
                      style={{ color: "white" }}
                      icon={faPen}
                    />{" "}
                    <h4 className="h4C" style={{ fontSize: "20px" }}>
                      Content Writing
                    </h4>
                    <p className="pC">
                      Duis molestie enim mattis gravida viverra. Fusce ut eros
                      augue. Sed id mauris vel neque
                    </p>{" "}
                    <p className="pC">৳499</p>
                    <Link to='/' className="readmore">
                      <span className="spanC">Course Details</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="box p-5" style={{ height: "400px" }}>
                    <FontAwesomeIcon
                      className="fas fa-laptop-code fa-3x mb-4"
                      style={{ color: "white" }}
                      icon={faMobile}
                    />{" "}
                    <h4 className="h4C" style={{ fontSize: "20px" }}>
                      Illustration with Mobile
                    </h4>
                    <p className="pC">
                      Duis molestie enim mattis gravida viverra. Fusce ut eros
                      augue. Sed id mauris vel neque
                    </p>{" "}
                    <p className="pC">৳499</p>
                    <Link to='/' className="readmore">
                      <span className="spanC">Course Details</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="box p-5" style={{ height: "400px" }}>
                    <FontAwesomeIcon
                      className=" fa-3x mb-4"
                      style={{ color: "white" }}
                      icon={faEnvelopesBulk}
                    />
                    <h4 className="h4C">Tricky Main</h4>
                    <p className="pC">
                      Duis molestie enim mattis gravida viverra. Fusce ut eros
                      augue. Sed id mauris
                    </p>{" "}
                    <p className="pC">৳499</p>
                    <Link to='/' className="readmore">
                      <span className="spanC">Course Details</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="box p-5" style={{ height: "400px" }}>
                    <FontAwesomeIcon
                      className="fas fa-laptop-code fa-3x mb-4"
                      style={{ color: "white" }}
                      icon={faPencilRuler}
                    />{" "}
                    <h4 className="h4C">Creating Visuals</h4>
                    <p className="pC">
                      Duis molestie enim mattis gravida viverra. Fusce ut eros
                      augue. Sed id mauris vel neque
                    </p>{" "}
                    <p className="pC">৳499</p>
                    <Link to='/' className="readmore">
                      <span className="spanC">Course Details</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="box p-5" style={{ height: "400px" }}>
                    <FontAwesomeIcon
                      className="fas fa-laptop-code fa-3x mb-4"
                      style={{ color: "white" }}
                      icon={faMapLocationDot}
                    />
                    <h4 className="h4C" style={{ fontSize: "20px" }}>
                      Bangladesh Map Within 30 Minutes
                    </h4>
                    <p className="pC">
                      Duis molestie enim mattis gravida viverra. Fusce ut eros
                      augue. Sed id mauris vel neque
                    </p>{" "}
                    <p className="pC">৳499</p>
                    <Link to='/' className="readmore">
                      <span className="spanC">Course Details</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="box p-5" style={{ height: "400px" }}>
                    <FontAwesomeIcon
                      className="fas fa-laptop-code fa-3x mb-4"
                      style={{ color: "white" }}
                      icon={faFileVideo}
                    />{" "}
                    <h4 className="h4C">Creating Videos</h4>
                    <p className="pC">
                      Duis molestie enim mattis gravida viverra. Fusce ut eros
                      augue. Sed id mauris vel neque
                    </p>{" "}
                    <p className="pC">৳499</p>
                    <Link to='/' className="readmore">
                      <span className="spanC">Course Details</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="box p-5" style={{ height: "400px" }}>
                    <FontAwesomeIcon
                      className="fas fa-laptop-code fa-3x mb-4"
                      style={{ color: "white" }}
                      icon={faUserGear}
                    />{" "}
                    <h4 className="h4C" style={{ fontSize: "20px" }}>
                      Presentation Tricks and Public Speaking
                    </h4>
                    <p className="pC">
                      Duis molestie enim mattis gravida viverra. Fusce ut eros
                      augue. Sed id mauris vel neque
                    </p>{" "}
                    <p className="pC">৳499</p>
                    <Link to='/' className="readmore">
                      <span className="spanC">Course Details</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="box p-5" style={{ height: "400px" }}>
                    <FontAwesomeIcon
                      className="fas fa-laptop-code fa-3x mb-4"
                      style={{ color: "white" }}
                      icon={faTableCells}
                    />{" "}
                    <h4 className="h4C" style={{ fontSize: "20px" }}>
                      Microsoft Word Formatting
                    </h4>
                    <p className="pC">
                      Duis molestie enim mattis gravida viverra. Fusce ut eros
                      augue. Sed id mauris vel neque
                    </p>{" "}
                    <p className="pC">৳499</p>
                    <Link to='/' className="readmore">
                      <span className="spanC">Course Details</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="box p-5" style={{ height: "400px" }}>
                    <FontAwesomeIcon
                      className="fas fa-laptop-code fa-3x mb-4"
                      style={{ color: "white" }}
                      icon={faLinkedin}
                    />{" "}
                    <h4 className="h4C" style={{ fontSize: "20px" }}>
                      LinkedIn Profile Setup
                    </h4>
                    <p className="pC">
                      Duis molestie enim mattis gravida viverra. Fusce ut eros
                      augue. Sed id mauris vel neque
                    </p>{" "}
                    <p className="pC">৳499</p>
                    <Link to='/' className="readmore">
                      <span className="spanC">Course Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterMain></FooterMain>
    </div>
    );
};

export default WebDevelop;