import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import "../App.css";

import NavBar from "./navigation/NavBar";
import Footer from "./Footer";

const VERIFY = gql`
  mutation VerifyUser($otp: String!) {
    verifyUser(otp: $otp)
  }
`;

const RESEND = gql`
  mutation ResendVerificationMail($data: RequestForgotPassInput!) {
    resendVerificationMail(data: $data)
  }
`;

const Verify = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [resend, setResend] = useState(false);
  const navigate = useNavigate();
  const [
    verify,
    { data: isVerified, error: verifyError, loading: verifyLoading },
  ] = useMutation(VERIFY);
  const [resendMail] = useMutation(RESEND);

  const handleSubmit = () => {
    verify({
      variables: { otp: otp },
    }).then((res) => {
      if (res.data?.verifyUser) {
        alert("The email is now verified!");
        navigate("/");
      }
    });
  };

  const handleResend = async (e) => {
    e.preventDefault();
    setResend(true);
    await resendMail({
      variables: { data: { email: email } },
    }).then((res) => {
      if (res.data?.resendVerificationMail) {
        alert("email re-sent");
        setResend(false);
      }
    });
  };

  if (isVerified) {
    navigate("/");
  }
  if (verifyError) {
    return <p>{verifyError.message}</p>;
  }
  if (verifyLoading) {
    return <p>Loading....</p>;
  }

  return (
   <body>
    <NavBar></NavBar>
    <section id="login">
      <center>
        <div className="login-signup">
          <h1>VERIFICATION</h1>
        </div>
      </center>
      <center>
        <form className="login_form" onSubmit={handleSubmit}>
          <input
            className="type-1 email"
            placeholder="OTP"
            outline="none"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          ></input>
          <button type="submit" className="type-2">
            VERIFY
          </button>
        </form>
        <div id="log-out">
          <button className="type-2" onClick={(e) => handleResend(e)}>
            RESEND OTP
          </button>
        </div>
        {resend ? (
          <form className="login_form" onSubmit={handleResend}>
            <input
              className="type-1 email"
              placeholder="EMAIL ID"
              outline="none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <button type="submit" className="type-2">
              SEND OTP
            </button>
          </form>
        ) : null}
      </center>
    </section>
    <Footer />
   </body>
  );
};

export default Verify;
