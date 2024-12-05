import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./sign-in.styles.scss";

const defaultFormFields = {
  username: "",
  password: "",
  rememberMe: false,
};

const SignIn = () => {
  const navigate = useNavigate();

  const [formFieldsErrors, setFormFieldsErrors] = useState({
    username: "",
    password: "",
  });
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [loading, setLoading] = useState(false);
  const { username, password, rememberMe } = formFields;

  const handleChange = (event) => {
    //destructure event.target properties
    const { name, value, checked } = event.target;

    //change the state
    if (name === "rememberMe") {
      setFormFields({ ...formFields, [name]: checked });
    } else {
      setFormFields({ ...formFields, [name]: value });
    }

    //check in inputs are valid
    if (name === "username" && !value) {
      setFormFieldsErrors({
        ...formFieldsErrors,
        [name]: "Username must be provided.",
      });
    } else if (name === "password" && !value) {
      setFormFieldsErrors({
        ...formFieldsErrors,
        [name]: "Password must be provided.",
      });
    } else {
      setFormFieldsErrors({
        ...formFieldsErrors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (event) => {
    //prevend the default behaviour of the browser
    event.preventDefault();

    if (!formFields.username && !formFields.password) {
      setFormFieldsErrors({
        ...formFieldsErrors,
        username: "Username must be provided.",
        password: "Password must be provided.",
      });
      return;
    } else if (!formFields.username) {
      setFormFieldsErrors({
        ...formFieldsErrors,
        username: "Username must be provided.",
      });
    } else if (!formFields.password) {
      setFormFieldsErrors({
        ...formFieldsErrors,
        password: "Password must be provided.",
      });
    }

    function asyncCall() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    }

    setLoading(true);
    try {
      const res = await asyncCall();
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <section className="login-page">
      <form className="login-form animate__animated animate__fadeInLeft">
        <img alt="form-logo" src="/logo.png" className="logo" />
        <h1 className="form-header">Welcome</h1>
        <p className="form-subheader">
          Enter your email and password to sign in{" "}
        </p>

        <div className="form-inputs">
          <div className="form-input">
            <label htmlFor="username">Username*</label>
            <input
              className=""
              id="username"
              required
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Username"
              style={{ borderColor: formFieldsErrors.username && "red" }}
            />
            {formFieldsErrors.username && (
              <p className="error-message">{formFieldsErrors.username}</p>
            )}
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
              style={{ borderColor: formFieldsErrors.password && "red" }}
            />
            {formFieldsErrors.password && (
              <p className="error-message">{formFieldsErrors.password}</p>
            )}
          </div>

          <div className="form-checkbox">
            <input
              id="remember-me"
              name="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button
            className="signin-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <div className="spinner"></div> : "Sign in"}
          </button>
        </div>

        <div className="register-info">
          Don't have an account?{" "}
          <NavLink className="register-link" to="/sign-up">
            Sign up here
          </NavLink>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
