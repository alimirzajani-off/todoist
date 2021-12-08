import React from "react";
import image1 from "../../../../assets/detail-image.webp";
import "./detail.sass";

const Detail = () => {
  return (
    <div className="comment-content">
      <div className="comment-text">
        <div className="title">
          <h1>A task manager you can trust for life</h1>
          <p>
            In the 14 years and 305 days that we’ve been building Todoist, we’ve
            never considered selling out or becoming acquired.
            <br /> Our team is committed to staying independent and earning your
            trust for as long as you need our apps.
          </p>
        </div>
        <div className="detail">
          <div className="more">
            <a href="#">
              <div className="more-item">
                <ion-icon name="arrow-forward-outline"></ion-icon>
                <p>Learn about our long-term mission</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="comment-photo">
        <img src={image1} width="60%" />
      </div>
    </div>
  );
};

export default Detail;
