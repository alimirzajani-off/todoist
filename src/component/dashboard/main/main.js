import { Route, Routes } from "react-router";
import { Today } from "./today/today";
import { Upcoming } from "./upcoming/upcoming";
import "./main.sass";

export const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="today" element={<Today />} />
        <Route path="upcoming" element={<Upcoming />} />
      </Routes>
    </div>
  );
};
