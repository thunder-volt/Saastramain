import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import NavBar from "./navigation/NavBar";
import Footer from "./Footer";
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
      <NavBar />  
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
      <center>
        <div className="login-signup">
          <h2>FORGOT PASSWORD</h2>
        </div>
      </center>
      <center>
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
    <Footer />
      </body>
  );
};

export default ForgotPassword;
