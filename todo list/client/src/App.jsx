import Alltasks from "./pages/Alltasks";
import Completedtasks from "./pages/Completedtasks.JSX";
import Uncompletedtasks from "./pages/Uncompletedtasks";
import Importanttasks from "./pages/Importanttasks";
import Secondary from "./pages/secondary";
import Main from "./pages/Main";
import { Routes, Route, Outlet } from "react-router";
import SideBar from "./components/sideBar/";
import "./App.css";
import Allheader from "./components/header/Allheader.jsx";
import {
  all_route,
  completed_route,
  uncompleted_route,
  secondary_route,
  main_route,
  important_route,
} from "./pages/routname.js";
import DynamicRoute from "./pages/DynamicRout.jsx";

function App() {
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-1">
          <SideBar />
        </div>

        <div className="col-lg-7 col-11">
          <div className="me-3">
            <Allheader />
          </div>
          <div>
            <Routes>
              <Route element={<Alltasks />} path={all_route} />
              <Route element={<Completedtasks />} path={completed_route} />
              <Route element={<Importanttasks />} path={important_route} />
              <Route element={<Uncompletedtasks />} path={uncompleted_route} />

              <Route element={<Main />} path={main_route} />

              <Route element={<DynamicRoute />} path="/:directory" />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
