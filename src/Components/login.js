import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import NavBar from "./navigation/NavBar";
import Footer from "./Footer";
import Signup from "./signup";
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
   <body >
    {/* <NavBar /> */}
      {/* <header>
      <meta charset="UTF-8"/>
    <title>Sign Up</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      </header> */}
      <div className="bg-login">

      <div class="star-field"/>
      <div class="layer-login"></div>
      <div class="layer-login"></div>
      <div class="layer-login"></div>
      <div class="shaastra">
            <svg   class="text-line" >
                <text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">
                    SHAASTRA2023
                </text>
            </svg>
            
      </div>

      <div class="main-login">

            <div class="cube">

                
                <div class="right-login">
                    <div class="left-login">
                        <h2>EMAIL<br/>ID</h2>
                        
                        <div class="dot-login-cont-left">
                            <div class="dot-login"></div>
                            <div class="dot-login"></div>
                        </div>
                    </div>
                    <div class="input-login" type="text">
                        <input 
                        class="field-login" 
                        type="text" 
                        value={user.email} 
                        placeholder=" " 
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>
                    <div class="dot-login-cont-right">
                        <div class="dot-login"></div>
                        <div class="dot-login"></div>
                    </div>
                    <div class="top-login">
                        <h2 class="title-login">SPECTRAL</h2>
                        <div class="dot-login-cont-top">
                            <div class="dot-login"></div>
                            <div class="dot-login"></div>
                        </div>

                    </div>
                    

                </div>
            </div>

            <div class="cube">

                
                <div class="right-login">
                    <div class="left-login">
                        <h2>PASS<br/>WORD</h2>
                        
                        <div class="dot-login-cont-left" style={{transform: 'rotateZ(45deg)'}}>
                            <div class="dot-login"></div>
                            <div class="dot-login"></div>
                        </div>
                    </div>
                    <div class="input-login" type="password">
                        <input 
                        class="field-login" 
                        type="password" 
                        placeholder=" " 
                        value={user.password} 
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    <div class="dot-login-cont-right">
                        <div class="dot-login"></div>
                        <div class="dot-login"></div>
                    </div>
                    <div class="top-login">
                        <h2 class="title-login">SPLENDORS</h2>
                        <div class="dot-login-cont-top">
                            <div class="dot-login"></div>
                            <div class="dot-login"></div>
                        </div>

                    </div>
                    

                </div>
            </div>

        </div>
        <div class="controls-login">

            <input type="submit" value="LOGIN" class="login-btn" onClick={handleSubmit}/>
            
            <div class="links-login">
            <a id="forgot-pwd" href={handleForgot}>Forgot Password ?</a>
            
            <a href={Signup} style={{color: "aliceblue"}}>Sign Up</a>
            </div>
        </div>
      </div>
      
     {/* <section id="login">
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
    </section> */}
    {/* <Footer /> */}
    </body> 
  );
};

export default Login;
