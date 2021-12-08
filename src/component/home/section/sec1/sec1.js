import React from "react";
import "./sec1.sass";

const Sec1 = () => {
  return (
    <section className="section1">
      <div className="h-title">
        <h1>Free up your mental space</h1>
      </div>
      <div className="detail">
        <p>
          Regain clarity and calmness by getting all those tasks out of your
          head and onto
          <br /> your to-do list (no matter where you are or what device you
          use).
        </p>
      </div>
      <div className="footer">
        <a href="#">
          <div className="sec1-footer-link">
            <ion-icon name="arrow-forward-outline"></ion-icon>
            <p className="link-text">Browse Todoist’s features</p>
          </div>
        </a>
        <a href="#">
          <div className="sec1-footer-link">
            <ion-icon name="caret-forward-circle-outline"></ion-icon>
            <p className="link-text">See Todoist in action</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Sec1;
