import { Main } from "./main/main";
import { Menu } from "./menu/menu";
import { Dnav } from "./nav/dnav";
import "./dashboard.sass";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="d-header">
        <Dnav />
      </div>
      <div className="d-body">
        <Menu />
        <Main />
      </div>
    </div>
  );
};
