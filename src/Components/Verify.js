import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import "../App.css";
import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";

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
  var { isOpen, onOpen, onClose } = useDisclosure();
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
    onClose = () => {
      window.location.reload();
    };
    return (
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent backgroundColor="red" color="black">
            <ModalHeader>{verifyError.message}</ModalHeader>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }
  if (verifyLoading) {
    return (
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            backgroundColor="rgba(198, 177, 211, 0.8)"
            color="black"
          >
            <ModalHeader>Loading...</ModalHeader>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }

  return (
   <body>
    <NavBar></NavBar>
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
