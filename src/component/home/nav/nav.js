import React from "react";
import { Link } from "react-router-dom";
import "./nav.sass";

const Nav = () => {
  return (
    <div className="nav">
      <div className="icon">
        <ion-icon name="logo-buffer"></ion-icon>
        <h3>todoist</h3>
      </div>
      <div className="nav-items">
        <div className="nav-link">
          <div className="item">
            <p>Features</p>
          </div>
          <div className="item">
            <p>Templates</p>
          </div>
          <div className="item">
            <p>For Teams</p>
          </div>
          <div className="item">
            <p>Resources</p>
          </div>
          <div className="item">
            <p>Pricing</p>
          </div>
        </div>
        <div className="nav-login">
          <div className="item">
            <Link to="/dashboard">
              <p>log in</p>
            </Link>
          </div>
          <div className="item">
            <Link to="/dashboard">
              <p>Sign up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
