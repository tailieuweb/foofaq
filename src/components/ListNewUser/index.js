import React, { useState, useEffect } from "react";
import "./style.scss";
import Layout from "../../common//PageLayout/index"
export default function Form () {

  
  // const [users, setUsers] = useState([]);
  // //get question
  // useEffect  (() => {

  //   (async () => {
  //     const usersData = await getUserOne();
  //     setUsers(usersData);
  //   }) ();


  // }, []);
   
        return (
          <Layout>
          <div className="container">
          <h2>User</h2>
          <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 form-search" type="search" aria-label="Search" />
                    <div className="s-input s-input__search h100" autoComplete="off" type="text">Filter by user</div>
                    <span className="button-search"><i className="fas fa-search" /></span>
                  </form>
                </li>
              </ul>
              <span className="navbar-text">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                  <button type="button" className="btn btn-secondary active">Reputation</button>
                  <button type="button" className="btn btn-secondary">New users</button>
                  <button type="button" className="btn btn-secondary">Voters</button>
                  <button type="button" className="btn btn-secondary">Editors</button>
                  <button type="button" className="btn btn-secondary">Moderators</button>
                </div>
              </span>
            </div>
          </nav>
          {/* Container */}
          <section className="blog-list px-3 py-5 p-md-5">
            <div className="row">
              <div className="col-md-3">
                <div className="item mb-5">
                  <div className="media">
                    <img className="mr-3 img-fluid post-thumb d-none d-md-flex" width="40%" src="https://znews-photo.zadn.vn/w660/Uploaded/kbd_bcvi/2019_11_23/5d828d976f24eb1a752053b5_thumb.jpg" alt="image" />
                    <div className="media-body">
                      <h5 className="title mb-1"><a href><small>GMB</small></a></h5>
                      <small className="meta mb-1"><span className="date">Published 2 days ago</span></small>
                      <div className="intro">
                        <small>Franch</small>
                      </div>
                      {/* <a class="more-link" href="">sql,<span>mysql</span></a> */}
                      <span><a href="#">sqp</a></span>,<span><a href="#">mysql</a></span>
                    </div>{/*//media-body*/}
                  </div>{/*//media*/}
                </div>{/*//item*/}
              </div>
              <div className="col-md-3">
                <div className="item mb-5">
                  <div className="media">
                    <img className="mr-3 img-fluid post-thumb d-none d-md-flex" width="40%" src="https://znews-photo.zadn.vn/w660/Uploaded/kbd_bcvi/2019_11_23/5d828d976f24eb1a752053b5_thumb.jpg" alt="image" />
                    <div className="media-body">
                      <h5 className="title mb-1"><a href><small>GMB</small></a></h5>
                      <small className="meta mb-1"><span className="date">Published 2 days ago</span></small>
                      <div className="intro">
                        <small>Franch</small>
                      </div>
                      {/* <a class="more-link" href="">sql,<span>mysql</span></a> */}
                      <span><a href="#">sqp</a></span>,<span><a href="#">mysql</a></span>
                    </div>{/*//media-body*/}
                  </div>{/*//media*/}
                </div>{/*//item*/}
              </div>
              <div className="col-md-3">
                <div className="item mb-5">
                  <div className="media">
                    <img className="mr-3 img-fluid post-thumb d-none d-md-flex" width="40%" src="https://znews-photo.zadn.vn/w660/Uploaded/kbd_bcvi/2019_11_23/5d828d976f24eb1a752053b5_thumb.jpg" alt="image" />
                    <div className="media-body">
                      <h5 className="title mb-1"><a href><small>GMB</small></a></h5>
                      <small className="meta mb-1"><span className="date">Published 2 days ago</span></small>
                      <div className="intro">
                        <small>Franch</small>
                      </div>
                      {/* <a class="more-link" href="">sql,<span>mysql</span></a> */}
                      <span><a href="#">sqp</a></span>,<span><a href="#">mysql</a></span>
                    </div>{/*//media-body*/}
                  </div>{/*//media*/}
                </div>{/*//item*/}
              </div>
              <div className="col-md-3">
                <div className="item mb-5">
                  <div className="media">
                    <img className="mr-3 img-fluid post-thumb d-none d-md-flex" width="40%" src="https://znews-photo.zadn.vn/w660/Uploaded/kbd_bcvi/2019_11_23/5d828d976f24eb1a752053b5_thumb.jpg" alt="image" />
                    <div className="media-body">
                      <h5 className="title mb-1"><a href><small>GMB</small></a></h5>
                      <small className="meta mb-1"><span className="date">Published 2 days ago</span></small>
                      <div className="intro">
                        <small>Franch</small>
                      </div>
                      {/* <a class="more-link" href="">sql,<span>mysql</span></a> */}
                      <span><a href="#">sqp</a></span>,<span><a href="#">mysql</a></span>
                    </div>{/*//media-body*/}
                  </div>{/*//media*/}
                </div>{/*//item*/}
              </div>
            </div>
          </section>
        </div>
        </Layout>
        )
    }
