import React, { useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./RegisterForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSuccess = (tokenResponse) => {
    const { access_token } = tokenResponse;

    localStorage.setItem("authToken", access_token);

    navigate("/success");
  };

  const handleError = (error) => {
    console.error("Login Failed:", error);
  };

  const login = useGoogleLogin({
    onSuccess: handleSuccess,
    onError: handleError,
  });

  useEffect(() => {
    // Initialize Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "APP_ID",
        cookie: true,
        xfbml: true,
        version: "v10.0",
      });
    };

    // Load the SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  const handleFacebookLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          console.log("Welcome! Fetching your information.... ");
          window.FB.api("/me", { fields: "name, email" }, (userInfo) => {
            console.log("Successful login for: " + userInfo.name);
            localStorage.setItem("user", JSON.stringify(userInfo));
            navigate("/success");
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "public_profile,email" }
    );
  };

  return (
    <div className="container">
      <h5>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </h5>
      <div className="register__subtitle">Start from free</div>
      <div className="register__title">Create an account</div>
      <div className="social-buttons">
        <button
          onClick={() => login()}
          className="social-buttons__button"
          type="button"
        >
          <FontAwesomeIcon icon={faGoogle} /> Sign up with Google
        </button>

        <button
          onClick={handleFacebookLogin}
          className="social-buttons__button"
          type="button"
        >
          <FontAwesomeIcon icon={faFacebook} /> Sign up with Facebook
        </button>
      </div>
      <form id="registerForm">
        <div className="form-group--two-columns">
          <div className="form-group__column">
            <input
              className="form-group__input"
              placeholder="First Name"
              type="text"
              id="first-name"
              name="first-name"
              required
            />
          </div>
          <div className="form-group__column">
            <input
              className="form-group__input"
              placeholder="Last Name"
              type="text"
              id="last-name"
              name="last-name"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <input
            className="form-group__input"
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="請輸入有效的電影郵件地址"
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-group__input"
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
            title="密碼必須包含8個字母，包括至少一個大寫字母，一个小寫字母，一個數字和一個特殊字元。"
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
          Already have an account?{" "}
          <a className="login-link__a" href="/login">
            Login in
          </a>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
