import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/signUp.css";
import { Context } from "../axios/axioscontext";


const Login = () => {
  const navigate = useNavigate();
  const { userSignIn } = useContext(Context);
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(userDetail));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && submit) {
      userSignIn(userDetail);
    }
  }, [error]);

  const validate = (values) => {
    const err = {};
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
    if (!values.email) {
      err.email = "*email is required";
    } else if (!emailRegex.test(values.email)) {
      err.email = "*email is invalid";
    }
    if (!values.password) {
      err.password = "*password is required";
    }
    return err;
  };

  return (
    <div className="container">
      <div className="signUp-container">
        <div className="signUp-header">
          <h4>LOGIN</h4>
        </div>
        <form className="signUp-form" method="POST" onSubmit={handleSubmit}>
          <div>
          <label >Email</label>
          </div>
          <div className="email">
            <input
              className="email-input"
              type="text"
              name="email"
              placeholder="User ID"
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{error.email}</p>
          <div>
          <label >Password</label>
          </div>
          <div className="password">
            <input
              className="password-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{error.password}</p>
          <button className="button-1">LOGIN</button>
        </form>
        <div className="signup">
        <p>Need an account?</p>
        <p className="button-2" onClick={() => navigate("/register")}>
         Sign Up
        </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
