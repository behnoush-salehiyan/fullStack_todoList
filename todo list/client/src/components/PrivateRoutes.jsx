import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { signup_route } from "../pages/routname";

export default function PrivateRoutes() {
  const { token } = useSelector((store) => store.usertoken);

  return token ? <Outlet /> : <Navigate to={signup_route} />;
}
