import React, { useState, useEffect } from "react";
import "./style.scss";
import Layout from "../../common/PageLayout/index";
import { getAllNewUserPagination,getNewUser } from "../../helpers/index";
import UserPagination from "../UserPagination/index";
export default function Form() {
  const [users, setUsers] = useState([]);
  const [totalPage, setUserTotalPage] = useState([]);

   // de phan trang that thi can 
   const [page, setPage] = useState(1);
   let perPage = 3; // 10 user/page
   let count = parseInt(totalPage.length) / perPage;//tong so trang 


  // b1: Ok dau tien ta phai lay toan bo user de tinh tong so trang roi sau do moi thao tung trang theo perpage
  useEffect(() => {
    (async () => {
      const usersData = await getNewUser();
      setUserTotalPage(usersData);
    })();
  }, []);

  // buoc 2 : thao tung theo trang
  useEffect(() => {
    (async () => {
      const usersData = await getAllNewUserPagination(page,perPage);
      setUsers(usersData);
      // console.log(usersData);
    })();
    // page hoac perPage thay doi thi ham nay tiep tuc chay ko thi thooi
  }, [page,perPage]);
  // moi khi click page khac thi lai query sang trang khac
  const handleChange = (event, value) => {
    // khi nhan vao page tuong ung se set lai page
    setPage(value);
  };

 


  //  Dua all user vao danh sach cac phan tu html
  const listItems = users.map((item) => (
    <div className="col-md-3" key={item.id}>
      <div className="item mb-5">
        <div className="media">
          <img
            className="mr-3 img-fluid post-thumb d-none d-md-flex"
            width="40%"
            src={item.avatar}
            alt="image"
          />
          <div className="media-body">
            <h5 className="title mb-1">
              <a href>
                <small>{item.name}</small>
              </a>
            </h5>
            <small className="meta mb-1">
              <span className="date">{item.content}</span>
            </small>
            <div className="intro">
              <small>Franch</small>
            </div>
            {/* <a class="more-link" href="">sql,<span>mysql</span></a> */}
            <span>
              <a href="#">{item.branch}</a>
            </span>
          </div>
          {/*//media-body*/}
        </div>
        {/*//media*/}
      </div>
      {/*//item*/}
    </div>
  ));

  return (
    <Layout>
      <div className="container">
        <h2>User</h2>
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2 form-search"
                    type="search"
                    aria-label="Search"
                  />
                  <div
                    className="s-input s-input__search h100"
                    autoComplete="off"
                    type="text"
                  >
                    Filter by user
                  </div>
                  <span className="button-search">
                    <i className="fas fa-search" />
                  </span>
                </form>
              </li>
            </ul>
            <span className="navbar-text">
              <div
                className="btn-group mr-2"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-secondary active">
                  Reputation
                </button>
                <button type="button" className="btn btn-secondary">
                  New users
                </button>
                <button type="button" className="btn btn-secondary">
                  Voters
                </button>
                <button type="button" className="btn btn-secondary">
                  Editors
                </button>
                <button type="button" className="btn btn-secondary">
                  Moderators
                </button>
              </div>
            </span>
          </div>
        </nav>
        {/* Container */}
        <section className="blog-list px-3 py-5 p-md-5">
          <div className="row">
            {/* XAC DINH DOAN CAN SU DUNG VONG LAP OK LAP TAI DAY */}
            {/* de o day la ra het */}
            {listItems}
          </div>
          {/* PHAN TRANG CHO NO SU DUNG MATERIAL UI CO HO TRO SAN ROI */}
         {/* gio ta co tong so trang thuc su */}
          <UserPagination tongTrang={count} OnThayDoi={handleChange} />
        </section>
      </div>
    </Layout>
  );
}
