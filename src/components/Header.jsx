import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav id="nav">
        <a href="/">Home</a>
        <a href="/addProperty">Add Property</a>
        <a href="/updateProperty">Update Property</a>
        <a href="/SignUp">Sign Up</a>
        <a href="/SignIn">Sign In</a>
        <a href="/SignOut">Sign Out</a>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
