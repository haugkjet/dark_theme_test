import React from "react";
import useLocalStorage from "use-local-storage";

import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          <div className="top">
            <i class="fa fa-google"></i>
            <i class="fa fa-facebook-square"></i>
            <i class="fa fa-linkedin"></i>
            <i class="fa fa-twitter-square"></i>
            <i class="fa fa-apple"></i>
          </div>
          <p className="divider">
            {" "}
            <span>Or</span>
          </p>
          <form>
            <label>E-mail</label>
            <input type="email" placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <div className="remember">
              <input type="checkbox" checked="checked" />
              <p>Remember me</p>
            </div>
          </form>
          <div className="bottom">
            <p>Forgot your password?</p>
            <a href="/">Reset Password</a>
          </div>
          <p className="create">Create Account</p>
        </div>
        <div className="theme-toggle">
          <h2>Light theme</h2>
          <button>Toggle dark theme</button>
        </div>
      </div>
      <h1>Dark Theme test</h1>
    </div>
  );
}

export default App;
