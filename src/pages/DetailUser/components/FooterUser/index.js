import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import {} from "@material-ui/core/styles";
import { Row, Col, Image } from "react-bootstrap";
const FooterUser = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "300px", marginRight: "30px" }}></div>
      <div style={{ width: "100%" }}>
        <div className="badges">
          <div className="text">Badges</div>
          <div className="number">(155)</div>
        </div>
        <div className="badges-content">
          <div className="badges-content-gold">
            <div className="badges-gold">
              <div>
                <div className="gold">GOLD</div>
                <div className="gold-number">21</div>
              </div>
            </div>
            <p style={{ margin: "10px 0px", fontSize: "14px" }}>Rarest</p>

            <div>
              <div className="rarest">
                <div>
                  <Link className="rarest-descrition-1">
                    <div className="rarest-descrition-shaps"></div>
                    <div className="rarest-descrition-text">where-clause</div>
                  </Link>
                </div>
                <div className="time">Dec 12</div>
              </div>

              <div className="rarest">
                <div>
                  <Link className="rarest-descrition-1">
                    <div className="rarest-descrition-shaps"></div>
                    <div className="rarest-descrition-text">
                      windows-functions
                    </div>
                  </Link>
                </div>
                <div className="time">Oct 15</div>
              </div>

              <div className="rarest">
                <div>
                  <Link className="rarest-descrition-1">
                    <div className="rarest-descrition-shaps"></div>
                    <div className="rarest-descrition-text">Join</div>
                  </Link>
                </div>
                <div className="time">Jul 31</div>
              </div>
            </div>
          </div>

          <div className="badges-content-silver">
            <div className="badges-silver">
              <div>
                <div className="gold">SILVER</div>
                <div className="gold-number">45</div>
              </div>
            </div>

            <p style={{ margin: "10px 0px", fontSize: "14px" }}>Rarest</p>

            <div>
              <div className="rarest">
                <div>
                  <Link className="rarest-descrition-1">
                    <div className="silver-rarest-descrition-shaps"></div>
                    <div className="rarest-descrition-text">where-clause</div>
                  </Link>
                </div>
                <div className="time">Dec 12</div>
              </div>

              <div className="rarest">
                <div>
                  <Link className="rarest-descrition-1">
                    <div className="silver-rarest-descrition-shaps"></div>
                    <div className="rarest-descrition-text">
                      windows-functions
                    </div>
                  </Link>
                </div>
                <div className="time">Oct 15</div>
              </div>

              <div className="rarest">
                <div>
                  <Link className="rarest-descrition-1">
                    <div className="silver-rarest-descrition-shaps"></div>
                    <div className="rarest-descrition-text">Join</div>
                  </Link>
                </div>
                <div className="time">Jul 31</div>
              </div>
            </div>
          </div>

          <div className="badges-content-bronze">
            <div className="badges-bronze">
              <div>
                <div className="gold">BRONZE</div>
                <div className="gold-number">89</div>
              </div>
            </div>

            <p style={{ margin: "10px 0px", fontSize: "14px" }}>Rarest</p>

            <div>
              <div className="rarest">
                <div>
                  <Link className="rarest-descrition-1">
                    <div className="bronze-rarest-descrition-shaps"></div>
                    <div className="rarest-descrition-text">where-clause</div>
                  </Link>
                </div>
                <div className="time">Dec 12</div>
              </div>

              <div className="rarest">
                <div>
                  <Link className="rarest-descrition-1">
                    <div className="bronze-rarest-descrition-shaps"></div>
                    <div className="rarest-descrition-text">
                      windows-functions
                    </div>
                  </Link>
                </div>
                <div className="time">Oct 15</div>
              </div>

              <div className="rarest">
                <div>
                  <Link className="rarest-descrition-1">
                    <div className="bronze-rarest-descrition-shaps"></div>
                    <div className="rarest-descrition-text">Join</div>
                  </Link>
                </div>
                <div className="time">Jul 31</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterUser;
