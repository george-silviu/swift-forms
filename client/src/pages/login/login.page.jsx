import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./login.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(email, password);
    try {
      //perform request to login endpoint
    } catch (error) {}
  };

  return (
    <section className="login-container">
      <form className="login-form">
        <header className="login-form-header">
          <h1>Welcome</h1>
          <p>Log in to continue your work</p>
        </header>

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

        <button className="button" onClick={handleSubmit}>
          Submit
        </button>

        <NavLink to="/register"> Register here</NavLink>
      </form>
    </section>
  );
};

export default Login;
