import React, { useState } from "react";
import "./login.css";

import logo from "./logo.png";

function Login({ login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(details);
    login(details);
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1050px",
      }}
    >
      <p sytle={{ float: "right", marginLeft: "30px" }}></p>
      <div className="containerChild">
        <div></div>
        <form className="ui form" onSubmit={submitHandler}>
          <div className="form-inner">
            {error !== "" ? (
              <div
                style={{ marginBottom: "10px", color: "#FFCCCB" }}
                className="error"
              >
                {error}
              </div>
            ) : (
              ""
            )}
            <div className="form-group">
              <label htmlFor="email" style={{ fontSize: "20px" }}>
                Email:{" "}
              </label>
              <input
                style={{
                  border: "2px solid skyblue",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
                type="email"
                name="email"
                id="email"
                className="form-login"
              />
            </div>
            <div className="form-group">
              <label style={{ fontSize: "20px" }} htmlFor="password">
                Password:{" "}
              </label>
              <input
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                style={{ marginTop: "10px", border: "2px solid skyblue" }}
                type="password"
                name="password"
                id="password"
                className="form-login"
              />
            </div>
            <input
              className="ui button"
              style={{
                marginTop: "10px",
                border: "3px solid skyblue",
                width: "120px",
              }}
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
