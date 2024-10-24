import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav id="nav">
        <Link to="/">Home</Link>
        <Link to="/addProperty">Add Property</Link>
        <Link to="/SignUp">Sign Up</Link>
        <Link to="/SignIn">Sign In</Link>
        <Link to="/SignOut">Sign Out</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
