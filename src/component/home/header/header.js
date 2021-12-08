import React from "react";
import image from "../../../assets/main-image.webp";
import image1 from "../../../assets/back-main-image.webp";
import image2 from "../../../assets/mobile-main-image.webp";
import image3 from "../../../assets/main-sub-image.webp";

import "./header.sass";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <div className="title-text">
          <h1>Organize it all with Todoist</h1>
        </div>
        <div className="title-btn">
          <button className="btn btn-danger">Get Started</button>
        </div>
      </div>
      <div className="img">
        <img src={image} width="90%" />
        <img src={image3} width="90%" className="sub-image" />
        <img src={image1} width="90%" className="back-image" />
        <img src={image2} width="35%" className="mobile-image" />
      </div>
    </div>
  );
};

export default Header;
