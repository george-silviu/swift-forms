import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./login.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formFields);

    navigate("/dashboard");
    try {
      //perform request to login endpoint
    } catch (error) {}
  };

  return (
    <section className="login-container">
      <form className="login-form">
        <header className="login-form-header">
          <h1>Log in to SwiftForms</h1>
        </header>

        <div>
          <div className="form-input">
            <label htmlFor="email">Email </label>
            <input
              id="email"
              required
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="form-input">
            <label htmlFor="password"> Password </label>
            <input
              id="password"
              required
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="button" onClick={handleSubmit}>
          Login
        </button>

        <NavLink to="/register"> Register here</NavLink>
      </form>
    </section>
  );
};

export default Login;
