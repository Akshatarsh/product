import React, { useState } from "react";
import "../../App.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <p id="W">Welcome</p>
      <div className="box">
        <form action="">
          <div className="title">Login</div>
          <div className="info">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter email"
            />
          </div>
          <div className="info">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter password"
            />
            <div className="forgetpassword">
              <a href="gmail.com"> Forget Password? </a>
            </div>
          </div>
          <div>
            <button id="login">Login</button>
          </div>
          <div>
            <button id="signup">SignUp</button>
          </div>
          <div className="orsignup">
            <label>or SignUp With</label>
          <div>
            <button id="facebook">Facebook</button>
            <button id="google">Google</button>
          </div>
          </div>
        </form>
      </div>
    </>
  );
};
