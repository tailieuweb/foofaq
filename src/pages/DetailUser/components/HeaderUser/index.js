import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import {} from "@material-ui/core/styles";
import { Row, Col, Image } from "react-bootstrap";
const HeaderUser = (props) => {
  return (
    <div>
      <Row>
        <Col md={9}>
          <div className="header">
            <div className="image-user">
              <div className="background-image-user">
                <Image
                  className="image"
                  src="https://i.stack.imgur.com/arsQA.jpg?s=328&g=1"
                />
              </div>
              <div className="reputation-image">
                <div className="reputation-image-user">
                  <div className="number-reputation">
                    <h4>180,484</h4>
                  </div>
                  <div className="text-reputation">REPUTATION</div>
                </div>

                <div className="reputation-image-user">
                  <div className="gold">
                    <div className="gold-number"></div>
                    <div className="gold-shaps">21</div>
                  </div>

                  <div className="silver">
                    <div className="silver-number"></div>
                    <div className="silver-shaps">49</div>
                  </div>
                  <div className="bronze">
                    <div className="bronze-number"></div>
                    <div className="bronze-shaps">49</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="description-user">
              <div className="title-name">
                <div className="title">GMP</div>
                <div className="top-percent"> top 0.01% this quarter</div>
              </div>
              <div className="description">
                <div style={{ marginTop: "20px", marginLeft: "30px" }}>
                  <span>
                    With sufficient thrust, pigs fly just fine. However, this is
                    not necessarily a good idea. It is hard to be sure where
                    they are going to land, and it could be dangerous sitting
                    under them as they fly overhead.
                  </span>
                </div>

                <div style={{ marginTop: "20px" }}>
                  <span>
                    The Twelve Networking Truths -{" "}
                    <Link to="/about"> RFC 1925</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="data-user">
            <div className="answer">
              <div className="bold"> 11,182</div>
              <div className="text"> answers</div>
            </div>
            <div className="answer">
              <div className="bold">0</div>
              <div className="text">questions</div>
            </div>
            <div className="answer">
              <div className="bold"> ~803K</div>
              <div className="text">people reched</div>
            </div>
          </div>
          <div className="place-time-user">
            <div className="country country-text" style={{ display: "flex" }}>
              <i
                class="fas fa-map-marker-alt icon-place-time-user"
                style={{ margigRight: "16px" }}
              ></i>
              <div className="text"> Franch</div>
            </div>
            <div className="date country-text" style={{ display: "flex" }}>
              <i class="fas fa-history icon-place-time-user"></i>
              <div className="text"> Member for 2 years, 1 month</div>
            </div>
            <div
              className="profile-views country-text"
              style={{ display: "flex" }}
            >
              {" "}
              <i class="fas fa-eye icon-place-time-user"></i>
              <div className="text"> 18,767 profile views</div>
            </div>
            <div className="last-seen country-text" style={{ display: "flex" }}>
              <i class="far fa-clock icon-place-time-user"></i>
              <div className="text"> Last seen 52 secs ago</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default HeaderUser;
