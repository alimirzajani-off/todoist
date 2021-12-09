import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./component/dashboard/dashboard";
import Home from "./component/home/home";
import "./App.sass";
import { Today } from "./component/dashboard/main/today/today";
import { Upcoming } from "./component/dashboard/main/upcoming/upcoming";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="today" element={<Today />} />
            <Route path="upcoming" element={<Upcoming />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
