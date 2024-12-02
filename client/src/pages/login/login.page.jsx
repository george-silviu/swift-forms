import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./login.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
  rememberMe: false,
};

const Login = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, rememberMe } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log({ name, value });
    setFormFields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    console.log(formFields);
  }, formFields.rememberMe);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formFields);

    // setTimeout(() => {
    //   navigate("/dashboard");
    //   try {
    //     //perform request to login endpoint
    //   } catch (error) {}
    // }, 2000);
  };

  return (
    <section className="login-page">
      <form className="login-form">
        <img alt="form-logo" src="/logo.png" className="logo" />
        <h1 className="form-header">Welcome</h1>
        <p className="form-subheader">
          Enter your email and password to sign in{" "}
        </p>

        <div className="form-inputs">
          <div className="form-input">
            <label htmlFor="email">Email*</label>
            <input
              className=""
              id="email"
              required
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="example@email.com"
            />
          </div>

          <div className="form-input">
            <label htmlFor="password">Password*</label>
            <input
              id="password"
              required
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>

          <div className="form-checkbox">
            <input
              id="remember-me"
              name="rememberMe"
              type="checkbox"
              value={rememberMe}
              onChange={(event) => {
                console.log(event.target);
              }}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="signin-button" onClick={handleSubmit}>
            Sign in
          </button>
        </div>

        <div className="register-info">
          Don't have an account?{" "}
          <NavLink className="register-link" to="/sign-up">
            Register here
          </NavLink>
        </div>
      </form>
    </section>
  );
};

export default Login;
