import React, { useState, useEffect } from "react";
import { getOneUser } from "../../helpers/userAPI";
import "./index.scss";
export default function Profile() {
    const [user, setUser] = useState({});
    useEffect(async () => {
      const data = await getOneUser();
      setUser(data);
    }, []);
  return (
    <div>
      <div className="container text-center full">
        <div className="alert">
          <img width="100%" src={user.user_avatar} alt="" />
          <div className="name">{user.user_name}</div>
          <p className="text-one">
            {user.user_title}
          </p>
          <ul>
            <li>
              <a href>
                <i className="fas fa-map-marker-alt" />
                <span> Location</span>
              </a>
            </li>
            <li>
              <a href>
                <i className="fas fa-blog" />
                <span>Personal site</span>
              </a>
            </li>
            <li>
              <a href>
                <i className="fab fa-twitter" />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href>
                <i className="fab fa-github" />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
          <button type="button" className="btn btn-primary nut">
            Edit
          </button>
          <button type="button" className="btn btn-light buttoni">
            <i className="fab fa-stack-overflow" /> <span>1</span>{" "}
          </button>
        </div>

      </div>
      {/* END FORM */}

      {/*  */}
      <div className="container">
        <div className="nenxanh">
          <form>
            <div className="form-group">
              <label className="trai">Personal statement</label>
              <textarea
                className="form-control"
                placeholder="Share what you enjoy working on, what inspires you, or what you hope to build someday. It's a quick, simple way to convey what makes you unique."
                rows={3}
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  required
                />
                <label className="form-check-label">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  Only show your personal statement to employers
                </div>
              </div>
            </div>
            <div className="form-row ">
              <div className="form-group col-md-6 trai ">
                <label>Favorite editor</label>
                <input
                  type
                  className="form-control"
                  placeholder="Sublime, Vim, atom..."
                />
              </div>
              <div className="form-group col-md-6 trai">
                <label>First computer</label>
                <input
                  type
                  className="form-control"
                  placeholder="Dell OptiPlex 486SX/25, Amiga 500"
                />
              </div>
            </div>
            <div className="back-button">
              <a href="#" className="btn btn-primary ">
                Save
              </a>
              <a href="#" className="btn btn-white button-show">
                Cancel
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
