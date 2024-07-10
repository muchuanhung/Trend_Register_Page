import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./RegisterForm.css";

const RegisterForm = () => {
  return (
    <div className="container">
      <h5>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </h5>
      <div className="register__subtitle">Start from free</div>
      <div className="register__title">Create an account</div>
      <div className="social-buttons">
        <button className="social-buttons__button">
          <FontAwesomeIcon icon={faGoogle} /> Sign up with Google
        </button>
        <button className="social-buttons__button">
          <FontAwesomeIcon icon={faFacebook} /> Sign up with Facebook
        </button>
      </div>
      <form id="registerForm">
        <div className="form-group">
          <label className="form-group__label" htmlFor="username">
            Username
          </label>
          <input
            className="form-group__input"
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="email">
            Email
          </label>
          <input
            className="form-group__input"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="password">
            Password
          </label>
          <input
            className="form-group__input"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div className="register__terms">
          <input
            className="register__terms-checkbox"
            type="checkbox"
            id="agree"
            name="agree"
            required
          />
          <label className="register__terms-label" htmlFor="agree">
            By creating an account, you agree to accept our Privacy Policy,
            Terms of Service, and Notification settings.
          </label>
        </div>
        <button className="form-group__button" type="submit">
          Create An Free Account!!
        </button>
        <div className="login-link">
          Already have an account? <a className="login-link__a" href="/login">Login in</a>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
