import image from "../../../../assets/dashboard-today.png";
import "./today.sass";
export const Today = () => {
  return (
    <div className="today">
      <div className="theader">
        <div className="theader-detail">
          <div className="thd-title">
            <h4>Today</h4>
            <p>Thu 9 Dec</p>
          </div>
          <div className="thd-icon">
            <ion-icon name="options-outline"></ion-icon>
            <p>view</p>
          </div>
        </div>
        <div className="theader-addTask">
          <ion-icon name="add-outline"></ion-icon>
          <input placeholder="Add Task" />
        </div>
      </div>
      <div className="tbody">
        <div className="tbody-header">
          <img src={image} width="25%" height="30%" />
        </div>
        <div className="tbody-content">
          <div className="tbc tbc-title">
            <h5>Get a clear view of the day ahead</h5>
            <p>All your tasks that are due today will show up here.</p>
          </div>
          <div className="tbc tbc-btn">
            <button className="btn btn-danger">Add Task</button>
          </div>
          <div className="tbc tbc-btn">
            <button className="btn btn-outline-secondary">
              <ion-icon name="flashlight-outline"></ion-icon>Establish a daily
              habit
            </button>
          </div>
          <div className="tbc tbc-footer">
            <a href="#">
              <ion-icon name="help-circle-outline"></ion-icon>How to plan your
              day
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
