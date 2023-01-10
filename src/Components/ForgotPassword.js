import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import "../style.css"
import NavBar from "./navigation/NavBar";
import Footer from "./Footer";
import TopBar from "./TopBar";
const GET_OTP = gql`
  mutation GetPasswordOTP($email: String!) {
    getPasswordOTP(email: $email)
  }
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [getotp, { data: isSent, error: opterror, loading: isloadingotp }] =
    useMutation(GET_OTP);

  const handleSubmit = (e) => {
    e.preventDefault();
    getotp({
      variables: { email: email },
    });
  };

  if (isloadingotp) {
    return <p>Loading...</p>;
  }
  if (opterror) {
    return <p>{opterror.message}</p>;
  }
  if (isSent) {
    navigate("/forgotpassword/resetpassword");
  }

  return (
    <body>
      <TopBar/> 
      <div class="page">
        <div class="c1"></div>
        <div class="c2"></div>
        <div class="c3"></div>
        <div class="c4"></div>
        <div class="c5"></div>
        <div class="c6"></div>
        <div class="c7"></div>
        <div class="c8"></div>
        <div class="c9"></div>
        <div class="c10"></div>
        <div class="c11"></div>
        <div class="c12"></div>
        <div class="c13"></div>
        <div class="c14"></div>
        <div class="c15"></div>
        <div class="c16"></div>
        <div class="c17"></div>
        <div class="c18"></div>
        <div class="c19"></div>
        </div>
   
    <section id="login">
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Shaastra 2023</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/static/styles/styles.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" />
      </header>
      
      <center className="misc-login-signup">
      <svg class="signup-heading">
            <text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">
              FORGOT PASSWORD
            </text>
          </svg>
      </center>
      <center className="misc-login-signup">
        <form className="login_form" onSubmit={handleSubmit}>
          <input
            className="type-1 email"
            placeholder="EMAIL ID"
            outline="none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button type="submit" className="type-2">
            GET RESET OTP
          </button>
        </form>
      </center>
    </section>
    <Footer designed={[{name: "Arnav", mail:"mailto:Cs21b009@smail.IITM.AC.in"}, {name: "Joel", mail: "mailto:"}]} />
      </body>
  );
};

export default ForgotPassword;
