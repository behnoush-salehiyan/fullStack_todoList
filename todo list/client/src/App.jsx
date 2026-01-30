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
  signup_route,
  signin_route,
} from "./pages/routname.js";
import DynamicRoute from "./pages/DynamicRout.jsx";
import SignUp from "./components/account/signUp.jsx";
import SignIn from "./components/account/Signin.jsx";
import PrivateRoutes from "./components/PrivateRoutes.jsx";

const DashboardLayout = () => (
  <div className="row">
    <div className="col-lg-3 col-1">
      <SideBar />
    </div>
    <div className="col-lg-7 col-11">
      <div className="me-3">
        <Allheader />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  </div>
);

function App() {
  return (
    <>
      <Routes>
        {/* public pages*/}
        <Route path={signup_route} element={<SignUp />} />
        <Route path={signin_route} element={<SignIn />} />

        {/* private pages */}
        <Route element={<PrivateRoutes />}>
          <Route element={<DashboardLayout />}>
            <Route path={all_route} element={<Alltasks />} />

            <Route path={completed_route} element={<Completedtasks />} />

            <Route path={important_route} element={<Importanttasks />} />

            <Route path={uncompleted_route} element={<Uncompletedtasks />} />

            <Route path={main_route} element={<Main />} />

            <Route path="/:directory" element={<DynamicRoute />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
