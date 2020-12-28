import React from "react";
function BSideBar(params) {
  return (
    <>
      <div className="photo-left">
        <img
          className="photo"
          src="https://images.pexels.com/photos/1804796/pexels-photo-1804796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <div className="active" />
      </div>
      <h4 className="name">Jane Doe</h4>
      <p className="info">UI/UX Designer</p>
      <p className="info">jane.doe@gmail.com</p>
      <div className="stats row">
        <div className="stat col-xs-4" style={{ paddingRight: "50px" }}>
          <p className="number-stat">3,619</p>
          <p className="desc-stat">Followers</p>
        </div>
        <div className="stat col-xs-4">
          <p className="number-stat">42</p>
          <p className="desc-stat">Following</p>
        </div>
        <div className="stat col-xs-4" style={{ paddingLeft: "50px" }}>
          <p className="number-stat">38</p>
          <p className="desc-stat">Uploads</p>
        </div>
      </div>
      <p className="desc">
        Hi ! My name is Jane Doe. I'm a UI/UX Designer from Paris, in France. I
        really enjoy photography and mountains.
      </p>
      <div className="social">
        <i className="fa fa-facebook-square" aria-hidden="true" />
        <i className="fa fa-twitter-square" aria-hidden="true" />
        <i className="fa fa-pinterest-square" aria-hidden="true" />
        <i className="fa fa-tumblr-square" aria-hidden="true" />
      </div>
    </>
  );
}
export default BSideBar;
