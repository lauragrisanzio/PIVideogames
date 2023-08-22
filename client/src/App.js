import React from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
// import Detail from "./views/detail/detail.component";
import Home from "./views/home/home.component.jsx";
// import Activities from "./views/activities/activities";
import Landing from "./views/landing/landing.component";

import "./App.css";
// import ActivitiesCards from "./components/activitiesCards/activitiesCards";
// import CreateActivity from "./components/createActivity/createActivity.component";

function App() {
  return (
    <div className="App">
      {/* {pathname !== "/" && <Nav exit={exit} onSearch={onSearch} />} */}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        {/* <Route path="/home/:id" element={<Detail />}></Route>
        <Route path="/activity" element={<Activities />}></Route> */}
        {/* <Route
          path="/activity/allActivities"
          element={<ActivitiesCards />}
        ></Route>
        <Route
          path="/activity/createActivity"
          element={<CreateActivity />}
        ></Route> */}
      </Routes>
    </div>
  );
}

export default App;
