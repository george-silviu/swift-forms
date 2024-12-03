import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./register.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
  repeatPassword: "",
};

const Register = () => {
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
      <form className="register-form">
        <h1>Register to SwiftForms</h1>

        <div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={handleChange}
            />
          </div>

          <div className="form-input">
            <label htmlFor="repeatPassword">Repeat password</label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              required
              value={repeatPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="button" onClick={handleRegister}>
          Register
        </button>

        <NavLink to="/sign-in">Log in here</NavLink>
      </form>
    </section>
  );
};

export default Register;
