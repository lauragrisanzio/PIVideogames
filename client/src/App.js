import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  Landing,
  Home,
  Detail,
  Form,
  GamesDatabase,
  GamesdbDelete,
  
} from "./views";
import NavBar from "./components/NavBar/navbar";

function App() {

  const { pathname } = useLocation();
  
  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/:id" element={<Detail />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/created" element={<GamesDatabase />}></Route>
        <Route path="/created/delete/:id" element={<GamesdbDelete />}></Route>
        {/* <Route path="/created/update/:id" element={<GamesdbUpdate />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
