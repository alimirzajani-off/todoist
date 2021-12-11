import React from "react";
import { Link } from "react-router-dom";
import "./menu.sass";
import "antd/dist/antd.css";
import { Collapse } from "antd";
export const Menu = () => {
  const { Panel } = Collapse;

  function callback(key) {
    console.log(key);
  }

  return (
    <div className="menu">
      <div className="pin-menu-list">
        <ul className="pin-items">
          <li className="pin-item-list">
            <div className="pin-item">
              <div className="pin-item-icon item-icon-1">
                <ion-icon name="file-tray-outline"></ion-icon>
              </div>
              <div className="pin-item-text item-text-1">
                <p>inbox</p>
              </div>
            </div>
          </li>
          <li className="pin-item-list">
            <Link to="/dashboard/today">
              <div className="pin-item">
                <div className="pin-item-icon item-icon-2">
                  <ion-icon name="calendar-number-outline"></ion-icon>
                </div>
                <div className="pin-item-text item-text-2">
                  <p>Today</p>
                </div>
              </div>
            </Link>
          </li>
          <li className="pin-item-list">
            <Link to="/dashboard/upcoming">
              <div className="pin-item">
                <div className="pin-item-icon item-icon-3">
                  <ion-icon name="calendar-number-outline"></ion-icon>
                </div>
                <div className="pin-item-text item-text-3">
                  <p>Upcoming</p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="project-menu-list">
        <Collapse onChange={callback} className="menu-collapse">
          <Panel header="Project" key="1">
            <ul className="project-items">
              <li className="project-item-list">
                <div className="project-item">
                  <div className="project-item-icon">
                    <ion-icon name="radio-button-on-outline"></ion-icon>
                  </div>
                  <div className="project-item-text">
                    <p>Welcome</p>
                  </div>
                </div>
              </li>
              <li className="project-item-list">
                <div className="project-item">
                  <div className="project-item-icon">
                    <ion-icon name="radio-button-on-outline"></ion-icon>
                  </div>
                  <div className="project-item-text">
                    <p>Try Boards</p>
                  </div>
                </div>
              </li>
              <li className="project-item-list">
                <div className="project-item">
                  <div className="project-item-icon">
                    <p>Archived project</p>
                  </div>
                </div>
              </li>
            </ul>
          </Panel>
          <Panel header="Label" key="2">
            <ul className="project-items">
              <li className="project-item-list">
                <div className="project-item">
                  <div className="project-item-icon">
                    <p>your list of label will show up here</p>
                  </div>
                </div>
              </li>
            </ul>
          </Panel>
          <Panel header="Filters" key="3">
            <ul className="project-items">
              <li className="project-item-list">
                <div className="project-item">
                  <div className="project-item-icon">
                    <ion-icon name="water-outline"></ion-icon>
                  </div>
                  <div className="project-item-text">
                    <p>Assigned tom me</p>
                  </div>
                </div>
              </li>
              <li className="project-item-list">
                <div className="project-item">
                  <div className="project-item-icon">
                    <ion-icon name="water-outline"></ion-icon>
                  </div>
                  <div className="project-item-text">
                    <p>Priority1</p>
                  </div>
                </div>
              </li>
            </ul>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};
