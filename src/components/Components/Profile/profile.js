import React, { useState, useEffect } from 'react';
import "./style.scss";


const profile = () => {
    return (
        <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="alert alert-primary" role="alert" > 
                <div className="card">
                  <img  width="164" height="264" src="images/avatar.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">1
                      <span>REPUTATION</span> </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h2 className="name-user">NiNinh</h2>
              <p className="text-user">(Your about me is currently blank.)</p>
              <p style={{textDecoration: 'underline'}}><a href="/users/edit/NiNinh">Click here to
                  edit</a></p>
            </div>
            <div className="col-md-4">
              <ul className="icon-detail">
                <li> <i className="fas fa-history" /> Member for 9 days  </li>
                <li> <i className="fas fa-eye"> </i> 0 profile views</li>
                <li> <i className="far fa-clock"></i> Last seen 5 mins ago</li>
                <li> <i className="far fa-calendar-alt"> </i> Visited 4 days, 3 consecutive</li>
              </ul>
              <p style={{textDecoration: 'underline'}}><a href="/blog">Click here to
                  New Blog</a></p>
                  
            </div>
          </div>
        </div>
        
      </div>
    );

}

export default profile;