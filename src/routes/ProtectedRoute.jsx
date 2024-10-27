import { Outlet } from "react-router-dom";

import SignIn from "../pages/SignIn";

const ProtectedRoute = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div> {userData && userData.loginStatus ? <Outlet /> : <SignIn />} </div>
  );
};

export default ProtectedRoute;
