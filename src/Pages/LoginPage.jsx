import React, { useState } from "react";
import axios from "axios";
import "../Styles/login.css";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.text();

      if (data == "true") {
        console.log("Login Success");
        window.location.href = 'home.html';
      } else {
        console.log("Login Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="prevent-select">
      <div className="container">
        <div className="b1">
          <form onSubmit={handlelogin}>
            <p className="l1">Login</p>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p>
              <a href=""> forgot password?</a>
            </p>
            <button type="submit">Login</button>
          </form>
          <p className="two">
            Create account?<Link to="/Signup">Signup now</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
