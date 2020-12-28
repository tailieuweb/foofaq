import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import {} from "@material-ui/core/styles";
import { Row, Col, Image } from "react-bootstrap";
const TopPostUser = (props) => {
  return (
    <div>
      <div className="top-network-posts">
        <div className="top-post-left">
          <div className="title-top-post-left">Top network posts</div>
          <div className="description-top-post">
            <Link to="/about">
              {" "}
              <i class="far fa-comment-alt" style={{ color: "#117aa8" }}></i> 5
              Some tag counters are not increasing
            </Link>
            <div style={{ marginLeft: "50px", marginTop: "10px" }}>
              {" "}
              <Link to="/about"> View more network posts →</Link>
            </div>
          </div>
        </div>
        <div className="top-post-right">
          <div className="top-post">
            <div className="title-top-post-right">
              <div className="title">Top network posts</div>
              <div className="title-number">(11,229)</div>
            </div>
            <div className="taps-post">
              <div className="question-answer">
                <Link className="all color-padding"> All</Link>
                <Link className="question color-padding"> Question</Link>
                <Link className="answer color-padding">Answer</Link>
              </div>
              <div className="vote-netwest">
                <Link className="votes color-padding">Votes</Link>
                <Link className="netwest color-padding">Netwest</Link>
              </div>
            </div>
          </div>
          <div className="content-answer">
            <div className="icon-answer-number">
              <div className="icon">
                {" "}
                <i
                  class="far fa-comment-alt"
                  style={{ color: "#5eba7d", marginRight: "15px" }}
                ></i>
              </div>
              <div className="number">17</div>
              <Link className="answer">
                Is there any implementation of database by perl
              </Link>
            </div>
            <div className="date">Nov 25 '19</div>
          </div>
          <div className="content-answer">
            <div className="icon-answer-number">
              <div className="icon">
                {" "}
                <i
                  class="far fa-comment-alt"
                  style={{ color: "#5eba7d", marginRight: "15px" }}
                ></i>
              </div>
              <div className="number">17</div>
              <Link className="answer">
                Is there any implementation of database by perl
              </Link>
            </div>
            <div className="date">Nov 25 '19</div>
          </div>
          <div className="content-answer">
            <div className="icon-answer-number">
              <div className="icon">
                {" "}
                <i
                  class="far fa-comment-alt"
                  style={{ color: "#5eba7d", marginRight: "15px" }}
                ></i>
              </div>
              <div className="number">17</div>
              <Link className="answer">
                Is there any implementation of database by perl
              </Link>
            </div>
            <div className="date">Nov 25 '19</div>
          </div>
          <div className="content-answer">
            <div className="icon-answer-number">
              <div className="icon">
                {" "}
                <i
                  class="far fa-comment-alt"
                  style={{ color: "#5eba7d", marginRight: "15px" }}
                ></i>
              </div>
              <div className="number">17</div>
              <Link className="answer">
                Is there any implementation of database by perl
              </Link>
            </div>
            <div className="date">Nov 25 '19</div>
          </div>

          <div className="content-answer">
            <div className="icon-answer-number">
              <div className="icon">
                {" "}
                <i
                  class="far fa-comment-alt"
                  style={{ color: "#5eba7d", marginRight: "15px" }}
                ></i>
              </div>
              <div className="number">17</div>
              <Link className="answer">
                Is there any implementation of database by perl
              </Link>
            </div>
            <div className="date">Nov 25 '19</div>
          </div>
          <div className="content-answer">
            <div className="icon-answer-number">
              <div className="icon">
                {" "}
                <i
                  class="far fa-comment-alt"
                  style={{ color: "#5eba7d", marginRight: "15px" }}
                ></i>
              </div>
              <div className="number">17</div>
              <Link className="answer">
                Is there any implementation of database by perl
              </Link>
            </div>
            <div className="date">Nov 25 '19</div>
          </div>

          <div className="content-answer">
            <div className="icon-answer-number">
              <div className="icon">
                {" "}
                <i
                  class="far fa-comment-alt"
                  style={{ color: "#5eba7d", marginRight: "15px" }}
                ></i>
              </div>
              <div className="number">17</div>
              <Link className="answer">
                Is there any implementation of database by perl
              </Link>
            </div>
            <div className="date">Nov 25 '19</div>
          </div>

          <div className="content-answer">
            <div className="icon-answer-number">
              <div className="icon">
                {" "}
                <i
                  class="far fa-comment-alt"
                  style={{ color: "#5eba7d", marginRight: "15px" }}
                ></i>
              </div>
              <div className="number">17</div>
              <Link className="answer">
                Is there any implementation of database by perl
              </Link>
            </div>
            <div className="date">Nov 25 '19</div>
          </div>
        </div>
      </div>
      <div className="top-posts"></div>
    </div>
  );
};
export default TopPostUser;
