import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background";
import "../assets/styles/auth.css";

export default function Login() {
  const isLoading = false;
  useEffect(() => {
    document.title = `${process.env.REACT_APP_APP_NAME} - Login`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="auth">
        <div className="background">
          <Background />
          <div className="jumbotron">
            <div className="form-title">
              <div className="icon"></div>
              <div className="text">Ankasa</div>
            </div>
            <form>
              <div className="form-input">
                <h1>Login</h1>
                <input
                  type="email"
                  className="input"
                  placeholder=" Enter email address"
                />
                <div className="form-password">
                  <input className="input" placeholder=" Enter your password" />
                  <button
                    type="button"
                    className="password"
                    onClick={() => {}}
                  ></button>
                </div>
              </div>

              {isLoading ? (
                <button
                  className="btn btn-success btn-lg ms-2"
                  type="button"
                  disabled
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{" "}
                  Loading...
                </button>
              ) : (
                <button type="submit" className="button">
                  Sign In
                </button>
              )}
            </form>
            <div className="text">Did you forgot your password?</div>
            <Link to="/reset">Tap here for reset</Link>
            <div className="line"></div>
            <div className="text">Did you don't have account?</div>
            <input type="button" className="button2" value="Register" />
            <div className="line"></div>
            <div className="text">or sign in with</div>
            <div className="form-login">
              <input type="button" className="google" />
              <input type="button" className="facebook" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
