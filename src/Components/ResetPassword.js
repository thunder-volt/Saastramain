import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import NavBar from "./navigation/NavBar";
import Footer from "./Footer";
import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";

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
          <h2>RESET PASSWORD</h2>
        </div>
      </center>
      <center>
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
    </section>
    <Footer />
    </body>
  );
};

export default ResetPassword;
