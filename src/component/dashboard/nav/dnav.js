import React from "react";
import "./dnav.sass";

export const Dnav = () => {
  return (
    <div className="header">
      <nav className="navbar nav main-header">
        <div className="left-section d-flex pl-5">
          <div className="icons left-icons d-flex">
            <div className="icon">
              <ion-icon name="reorder-three-outline"></ion-icon>
            </div>
            <div className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </div>
          </div>
          <div className="search-boxs rounded">
            <span className="search-tools">
              <input
                type="search"
                name=""
                id=""
                placeholder="search"
                className="search-box border-0 txt-input rounded"
                onChange={(e) => this.props.handleSearchProps(e)}
              />
              <i className="las la-search"></i>
            </span>
          </div>
        </div>
        <div className="right-section d-flex pr-5">
          <div className="right-icons d-flex">
            <div className="icon">
              <ion-icon name="add-outline"></ion-icon>
            </div>
            <div className="icon">
              <ion-icon name="trending-up-outline"></ion-icon>
            </div>
            <div className="icon">
              <p>0/5</p>
            </div>
            <div className="icon">
              <ion-icon name="help-circle-outline"></ion-icon>
            </div>
            <div className="icon">
              <ion-icon name="notifications-outline"></ion-icon>
            </div>
            <div className="icon">
              <p>am</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
