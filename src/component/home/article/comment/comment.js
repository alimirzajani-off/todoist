import React from "react";
import image1 from "../../../../assets/profile1.webp";
import "./comment.sass";

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment-content">
        <div className="comment-text">
          <div className="title">
            <h4>“</h4>
            <p>
              I literally couldn’t do my job or even manage all the business of
              being a fully functioning parent and spouse without Todoist.
            </p>
          </div>
          <div className="detail">
            <div className="auth">
              <h6>Khoi Vinh</h6>
              <p>Principal Designer at Adobe</p>
            </div>
            <div className="more">
              <a href="#">
                <div className="more-item">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                  <p>Read more</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="comment-photo">
          <img src={image1} width="60%" />
        </div>
      </div>
      <div className="comment-list">
        <div className="comment-item-list">
          <p>Creative</p>
        </div>
        <div className="comment-item-list">
          <p>Developers</p>
        </div>
        <div className="comment-item-list">
          <p>Students</p>
        </div>
        <div className="comment-item-list">
          <p>Small businesses</p>
        </div>
        <div className="comment-item-list">
          <p>Entrepreneurs</p>
        </div>
        <div className="comment-item-list">
          <p>Freelancer</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
