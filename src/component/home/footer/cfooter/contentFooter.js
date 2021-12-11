import "./contentFooter.sass";
export const ContentFooter = () => {
  return (
    <div className="cfooter">
      <div className="cfooter-left">
        <div className="cfl-icon">
          <ion-icon name="logo-buffer"></ion-icon>
        </div>
        <div className="cfl-title">
          <p>
            Join millions of people who organize work and life with Todoist.
          </p>
        </div>
        <div className="cfl-media-icons">
          <div className="media-icon">
            <ion-icon name="logo-twitter"></ion-icon>
          </div>
          <div className="media-icon">
            <ion-icon name="logo-youtube"></ion-icon>
          </div>
          <div className="media-icon">
            <ion-icon name="logo-facebook"></ion-icon>
          </div>
          <div className="media-icon">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
        </div>
      </div>
      <div className="cfooter-right">
        <div className="column-1">
          <ul>
            <p>Features</p>
            <li>
              <h6>How It Works</h6>
            </li>
            <li>
              <h6>For Teams</h6>
            </li>
            <li>
              <h6>Pricing</h6>
            </li>
            <li>
              <h6>Templates</h6>
            </li>
          </ul>
        </div>
        <div className="column-2">
          <ul>
            <p>Resources</p>
            <li>
              <h6>Download Apps</h6>
            </li>
            <li>
              <h6>Help Center</h6>
            </li>
            <li>
              <h6>Productivity Methods</h6>
            </li>
            <li>
              <h6>Refer a friend</h6>
            </li>
            <li>
              <h6>Integrations</h6>
            </li>
            <li>
              <h6>Channel Partners</h6>
            </li>
            <li>
              <h6>Developer API</h6>
            </li>
          </ul>
        </div>
        <div className="column-3">
          <ul>
            <p>COMPANY</p>
            <li>
              <h6>About Us</h6>
            </li>
            <li>
              <h6>We are hiring!</h6>
            </li>
            <li>
              <h6>Blog</h6>
            </li>
            <li>
              <h6>Press</h6>
            </li>
            <li>
              <h6>Twist</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
