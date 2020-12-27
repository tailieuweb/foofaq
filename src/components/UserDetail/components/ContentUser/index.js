import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import {} from "@material-ui/core/styles";
import { Row, Col, Image } from "react-bootstrap";

const ContentUser = (props) => {
  return (
    <div>
      <div style={{ marginTop: "30px", display: "flex" }}>
        <div className="communities">
          <div className="communities-title">
            <i
              class="fas fa-address-card"
              style={{ color: "#0077cc", marginRight: "5px", marginTop: "3px" }}
            >
              {" "}
            </i>
            <div className="communities-text">Communities</div>
            <div className="communities-number">(4)</div>
          </div>
          <div className="communities-data">
            <div className="communities-data-stack">
              <div className="icon">
                <i
                  class="fab fa-stack-overflow"
                  style={{ color: "orange" }}
                ></i>
                <div className="text">
                  {" "}
                  <Link>Stack overflow</Link>
                </div>
              </div>

              <div className="number"> 180.7 K</div>
            </div>

            <div className="communities-data-stack">
              <div className="icon">
                <i class="fas fa-database" style={{ color: "#117aa8" }}></i>
                <div className="text">
                  {" "}
                  <Link> Database Administrators</Link>{" "}
                </div>
              </div>

              <div className="number">130</div>
            </div>

            <div className="communities-data-stack">
              <div className="icon">
                <i class="far fa-comment-alt" style={{ color: "#117aa8" }}></i>
                <div className="text">
                  {" "}
                  <Link>Meta Stack Exchange </Link>
                </div>
              </div>

              <div className="number">151</div>
            </div>

            <div className="communities-data-stack">
              <div className="icon">
                <i class="fas fa-cog" style={{ color: "#8ba0b1" }}></i>
                <div className="text">
                  {" "}
                  <Link>Stack Apps </Link>{" "}
                </div>
              </div>

              <div className="number">140</div>
            </div>
          </div>
        </div>

        <div className="top-tags">
          <div className="top-tags-title">
            <div className="top-tags-text">Top tags</div>
            <div className="top-tags-number">(1,805)</div>
          </div>

          <div className="top-tags-data">
            <div className="tags-data">
              <div className="sql">
                <div className="text-sql">sql</div>
                <div className="shaps-sql"> </div>
              </div>
              <div className="sql-number">
                <div className="score display-flex">
                  <div className="title">SCORE</div>
                  <div className="number">10,330</div>
                </div>
                <div className="post-1 display-flex">
                  <div className="title">POST</div>
                  <div className="number">9,774</div>
                </div>
                <div className="post-2 display-flex">
                  <div className="title">POST %</div>
                  <div className="number">87</div>
                </div>
              </div>
            </div>

            <div className="tags-data-1">
              <div className="tags-data-1-left">
                <div className="sql">
                  <div className="text-sql">mysql</div>
                  <div className="shaps-sql"> </div>
                </div>
                <div className="sql-number">
                  <div className="score display-flex">
                    <div className="title">SCORE</div>
                    <div className="number">10,330</div>
                  </div>
                  <div className="post-1 display-flex">
                    <div className="title">POST</div>
                    <div className="number">9,774</div>
                  </div>
                </div>
              </div>

              <div className="tags-data-1-right">
                <div className="sql">
                  <div className="text-sql">sql-server</div>
                  <div className="shaps-sql"> </div>
                </div>
                <div className="sql-number">
                  <div className="score display-flex">
                    <div className="title">SCORE</div>
                    <div className="number">10,330</div>
                  </div>
                  <div className="post-1 display-flex">
                    <div className="title">POST</div>
                    <div className="number">9,774</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tags-data-2">
              <div className="tags-data-2-left">
                <div className="sql">
                  <div className="text-sql">postgresql</div>
                  <div className="shaps-sql"> </div>
                </div>
                <div className="sql-number">
                  <div className="score display-flex">
                    <div className="title">SCORE</div>
                    <div className="number">10,330</div>
                  </div>
                  <div className="post-1 display-flex">
                    <div className="title">POSTS</div>
                    <div className="number">9,774</div>
                  </div>
                </div>
              </div>

              <div className="tags-data-2-center">
                <div className="sql">
                  <div className="text-sql">oracle</div>
                  <div className="shaps-sql"> </div>
                </div>
                <div className="sql-number">
                  <div className="score display-flex">
                    <div className="title">SCORES</div>
                    <div className="number">10,330</div>
                  </div>
                  <div className="post-1 display-flex">
                    <div className="title">POST</div>
                    <div className="number">9,774</div>
                  </div>
                </div>
              </div>

              <div className="tags-data-2-right">
                <div className="sql">
                  <div className="text-sql">tsql</div>
                  <div className="shaps-sql"> </div>
                </div>
                <div className="sql-number">
                  <div className="score display-flex">
                    <div className="title">SCORE</div>
                    <div className="number">10,330</div>
                  </div>
                  <div className="post-1 display-flex">
                    <div className="title">POSTS</div>
                    <div className="number">9,774</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="top-meta-posts">
          <div className="top-meta-posts-title">
            <div className="top-meta-posts-text">Top meta posts</div>
            <div className="top-meta-posts-number">
              1{" "}
              <i
                class="far fa-comment-alt"
                style={{ fontSize: "12px", marginRight: "6px" }}
              ></i>
              <i
                class="fas fa-question"
                style={{ fontSize: "12px", marginRight: "4px" }}
              ></i>
              0
            </div>
          </div>

          <div className="top-meta-posts-data">
            <div className="top-meta-posts-data-stack">
              <div className="icon">
                <i
                  class="fab fa-stack-overflow"
                  style={{ color: "orange" }}
                ></i>
                <div className="text">
                  {" "}
                  <Link>
                    20 How would you respond to this long-term research
                    invitation from SO?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view-all-tags">
          <Link>
            View all tags
            <i
              class="fas fa-long-arrow-alt-right"
              style={{ marginLeft: "5px" }}
            ></i>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ContentUser;
