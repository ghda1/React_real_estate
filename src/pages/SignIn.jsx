import { useContext, useState } from "react";
import { PropertiesContext } from "../Contexts/PropertiesContext";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const initialValue = {
    name: "",
    password: "",
  };
  const [user, setUser] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const { users } = useContext(PropertiesContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const isValidateForm = () => {
    const newErrors = {};
    if (!user.name.trim()) newErrors.name = "User name is required";
    if (user.name.length < 3)
      newErrors.name = "User name should be at least 3 characters long";
    if (!user.password.trim()) newErrors.password = "User password is required";
    if (user.password.length < 7)
      newErrors.password = "User password should be at least 7 characters long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const restValues = () => {
    setUser(initialValue);
    setErrors({});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (isValidateForm()) {
      const findUser = users.filter(
        (u) => u.name === user.name && u.password === user.password
      );
      if (findUser.length != 0) {
        localStorage.setItem(
          "userData",
          JSON.stringify({ findUser, loginStatus: true })
        );
        restValues();
        navigate("/");
      } else {
        errors.signIn = "Incorrect user name or password";
        setErrors(errors);
      }
    }
  };
  return (
    <div className="signIn">
      <form className="signIn-form" onSubmit={submitHandler}>
        <div id="name-input">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={user.name}
            required
          ></input>
          {errors.name && <p className="errors">{errors.name}</p>}
        </div>
        <div id="password-input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={user.password}
            required
          ></input>
          {errors.password && <p className="errors">{errors.password}</p>}
        </div>
        {errors.signIn && <p className="errors">{errors.signIn}</p>}
        <button type="submit">Sign In</button>
        <p className="signInToSignUp">You do not have an account?</p>
        <Link className="navigateToSignUp" onClick={() => navigate("/signUp")}>
          Sign Up
        </Link>
      </form>
    </div>
  );
}

export default SignIn;
