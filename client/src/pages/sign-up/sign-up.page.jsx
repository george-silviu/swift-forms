import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./sign-up.styles.scss";

const defaultFormFields = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, repeatPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    console.log(formFields);
  };

  return (
    <section className="register-page">
      <form className="register-form animate__animated animate__fadeInRight">
        <img className="logo" src="/logo.png"></img>
        <h1 className="form-header">Register to SwiftForms</h1>
        <p className="form-subheader">
          Insert your details to create a new account
        </p>
        <div className="form-inputs">
          <div className="form-input">
            <label htmlFor="username">Username*</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="form-input">
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              placeholder="example@email.com"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="form-input">
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={handleChange}
            />
          </div>

          <div className="form-input">
            <label htmlFor="repeatPassword">Repeat password*</label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              placeholder="Repeat password"
              required
              value={repeatPassword}
              onChange={handleChange}
            />
          </div>

          <button className="signup-button" onClick={handleRegister}>
            Sign up
          </button>
        </div>

        <div className="signin-info">
          Already have an accout?{" "}
          <NavLink className="signin-link" to="/sign-in">
            Sign in here
          </NavLink>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
