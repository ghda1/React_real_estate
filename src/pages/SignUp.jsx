import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import { PropertiesContext } from "../Contexts/PropertiesContext";

function SignUp() {
  const initialValue = {
    name: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const { setUsers } = useContext(PropertiesContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handelAddUser = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  const isValidateForm = () => {
    const newErrors = {};
    if (!user.name.trim()) newErrors.name = "User name is required";
    if (user.name.length < 3)
      newErrors.name = "User name should be at least 3 characters long";
    if (!user.email) newErrors.email = "User email is required";
    if (user.email.length < 7)
      newErrors.email = "User email should be at least 7 characters long";
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
      const newUser = {
        id: uuidv4(),
        name: user.name,
        email: user.email,
        password: user.password,
      };
      handelAddUser(newUser);
      restValues();
      navigate("/signIn");
    }
  };

  return (
    <div className="signUp">
      <form className="signUp-form" onSubmit={submitHandler}>
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
        <div id="email-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={user.email}
            required
          ></input>
          {errors.email && <p className="errors">{errors.email}</p>}
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
