import React from "react";
import "./sec2.sass";
import "../../../../assets/back-section.webp";

const Sec2 = () => {
  return (
    <section className="section2">
      <div className="stores">
        <div className="store s-1">
          <div className="s-name">Google Play</div>
          <div className="s-rate">
            <h5>★★★★★</h5>
          </div>
          <div className="s-detail">
            <h5>Editor’s Choice 4.7 stars, 187K+ reviews</h5>
          </div>
        </div>
        <div className="store s-2">
          <div className="s-name">App Store</div>
          <div className="s-rate">
            <h5>★★★★★</h5>
          </div>
          <div className="s-detail">
            <h5>Featured app 4.8 stars, 30K+ reviews</h5>
          </div>
        </div>
        <div className="store s-3">
          <div className="s-name">The verge</div>
          <div className="s-rate">
            <h5>9/10</h5>
          </div>
          <div className="s-detail">
            <h5>The best to-do list app right now</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec2;
