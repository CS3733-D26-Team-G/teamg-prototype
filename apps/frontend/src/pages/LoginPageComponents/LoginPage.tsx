import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="login-page">
      <img
        src="./public/hanover_logo.png"
        alt="logo"
      />
      <div className="usernamebox">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="...@Hanover.org"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="passwordbox">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type={showPass ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="toggle"
          type="button"
          onClick={() => setShowPass(!showPass)}
        >
          {showPass ? "O" : "X"}
        </button>
      </div>
      <button
        className="buddyButton"
        type="button"
        /* onClick={() => if valid login go to dashboard if not say bad user/pass */
      >
        Log In
      </button>
      "
      <div className="box">
        <a
          href="dummyLink.com"
          id="forgotUser"
        >
          Forgot Your Username?
        </a>
        <a
          href="dummyLink.com"
          id="forgotPassword"
        >
          Forgot Your Password?
        </a>
      </div>
      <div>
        <div className="rememberMe">
          <label htmlFor="remMe">Remember Me</label>
          <input
            id="remMe"
            type="checkbox"
            name="remMe"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
