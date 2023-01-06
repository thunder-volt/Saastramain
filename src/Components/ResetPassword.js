import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import NavBar from "./navigation/NavBar";
import Footer from "./Footer";
import "../style.css";
import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import TopBar from "./TopBar";

const RESET = gql`
  mutation ResetPassword($data: ResetPasswordInput!) {
    resetPassword(data: $data)
  }
`;

const ResetPassword = () => {
  const [resetFunction, { data, loading, error }] = useMutation(RESET);
  const [user, setUser] = useState({ email: "", password: "", otp: "" });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(user);
    resetFunction({
      variables: {
        data: { email: user.email, newPassword: user.password, otp: user.otp },
      },
    });
  };
  var { isOpen, onOpen, onClose } = useDisclosure();

  if (loading) {
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
  if (error) {
    return (
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent backgroundColor="red" color="black">
            <ModalHeader>{error.message}</ModalHeader>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }
  if (data) {
    navigate("/");
  }
  return (
    <body>
      <TopBar/>
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
              RESET PASSWORD
            </text>
          </svg>
      </center>
      <center className="misc-login-signup">
        <form className="login_form" onSubmit={handleSubmit}>
          <input
            className="type-1 email"
            placeholder="EMAIL ID"
            outline="none"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
          <input
            className="type-1 email"
            placeholder="OTP"
            outline="none"
            value={user.otp}
            onChange={(e) => setUser({ ...user, otp: e.target.value })}
          ></input>
          <div className="password">
            <input
              className="type-1 password"
              type="password"
              placeholder="PASSWORD"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            ></input>
          </div>
          <button type="submit" className="type-2">
            CONFIRM RESET
          </button>
        </form>
      </center>
      <div class="page">
        <div class="c1 circle"></div>
        <div class="c2 circle"></div>
        <div class="c3 circle"></div>
        <div class="c4 circle"></div>
        <div class="c5 circle"></div>
        <div class="c6 circle"></div>
        <div class="c7 circle"></div>
        <div class="c8 circle"></div>
        <div class="c9 circle"></div>
        <div class="c10 circle"></div>
        <div class="c11 circle"></div>
        <div class="c12 circle"></div>
        <div class="c13 circle"></div>
        <div class="c14 circle"></div>
        <div class="c15 circle"></div>
        <div class="c16 circle"></div>
        <div class="c17 circle"></div>
        <div class="c18 circle"></div>
        <div class="c19 circle"></div>
        </div>
    </section>
    <Footer designed={[{name: "Arnav", mail:"mailto:Cs21b009@smail.IITM.AC.in"}, {name: "Joel", mail: "mailto:"}]} />
    </body>
  );
};

export default ResetPassword;
