import React from "react";
import "./Journey.css";
import logo from "../../../Media/android-icon-192x192.png";
const Journey = () => {
  return (
    <div>
      <div className="page-section section" id="about">
        <div className="ccontainer">
          <div className="text-center">
            <h2 className="section-heading text-uppercase h2">Our Journey</h2>
            <h3 className="section-subheading text-muted h3">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <ul className="timeline ul">
            <li className="lli">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={logo}
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="h4">2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted lli">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={logo}
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="h4">March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="lli">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={logo}
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="h4">December 2015</h4>
                  <h4 className="subheading h4">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted lli">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={logo}
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="h4">July 2020</h4>
                  <h4 className="subheading h4">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted lli">
              <div className="timeline-image">
                <h4 className="h4">
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Journey;
