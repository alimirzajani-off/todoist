import React from "react";
import image1 from "../../../../assets/about-article.webp";
import image2 from "../../../../assets/about-article-back.webp";
import "./about.sass";

const About = () => {
  return (
    <div className="about">
      <div className="text">
        <h5>Todoist has helped millions of people complete</h5>
        <h2>over 1.5 billion tasks in 150+ million projects.</h2>
      </div>
      <div className="video">
        <img className="main" src={image1} width="40%" />
        <img src={image2} width="40%" />
        <a href="#">
          <div className="video-link">
            <ion-icon name="arrow-forward-outline"></ion-icon>
            <p className="link-text">Browse Todoist’s features</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default About;
