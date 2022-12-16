import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import "../App.css";
import NavBar from "./navigation/NavBar";
import Footer from "./Footer";
const LOGIN_MUTATION = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      id
      isVerified
      role
    }
  }
`;

const Login = () => {
  const [loginFunction, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    loginFunction({
      variables: { data: { email: user.email, password: user.password } },
    });
  };

  const handleForgot = () => {
    navigate("/forgotpassword");
  };

  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    if (error.message === "Account Not Found") {
      navigate("/signup");
    }
    return <p>{error.message}</p>;
  }
  if (data) {
    if (!data.login?.isVerified) {
      navigate("/verify");
    } else {
      if (data.login?.role === "ADMIN") {
        localStorage.setItem("role", "admin");
        navigate("/admin");
      } else {
        localStorage.setItem("role", "user");
        navigate("/edit");
      }
    }
  }
  return (
   <body>
    <NavBar />
     <section id="login">
      <center className=".center">
        <div className="login-signup">
          <h1>LOGIN</h1>
        </div>
      </center>
      <center className=".center">
        <form className="login_form" onSubmit={handleSubmit}>
          <input
            className="type-1 email"
            placeholder="EMAIL ID"
            outline="none"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
          <div className="password">
            <input
              className="type-1 password"
              type="password"
              placeholder="PASSWORD"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            ></input>
            <div id="forgot-pwd" onClick={handleForgot}>
              Forgot password?
            </div>
          </div>
          <button type="submit" className="type-2">
            LOG IN
          </button>
        </form>
      </center>
    </section>
    <Footer />
    </body> 
  );
};

export default Login;
