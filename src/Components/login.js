import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import TopBar from "./TopBar";
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

const LOGIN_MUTATION = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      id
      isVerified
      role
      shaastraID
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
    onClose = () => {
      if (error.message === "Account Not Found") navigate("/signup");
      else {
        navigate("/login");
        window.location.reload();
      }
    };
    return (
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent backgroundColor="#E97451" color="black">
            <ModalHeader>{error.message}</ModalHeader>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }
  if (data) {
    if (!data.login?.isVerified) {
      navigate("/verify");
    } else {
      if (data.login?.role === "ADMIN") {
        localStorage.setItem("role", "admin");
        localStorage.setItem("id", data.login?.shaastraID);
        navigate("/events");
      } else {
        localStorage.setItem("role", "user");
        localStorage.setItem("id", data.login?.shaastraID);
        navigate("/events");
      }
    }
  }
  return (
    <>
      <body>
        <TopBar />
        {/* <NavBar /> */}
        {/* <header>
    <meta charset="UTF-8"/>
  <title>Sign Up</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    </header> */}
        <div className="bg-login">
          <div class="star-field" />
          <div class="layer-login"></div>
          <div class="layer-login"></div>
          <div class="layer-login"></div>
          <div class="shaastra">
            <svg class="text-line">
              <text
                x="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                y="50%"
              >
                LOGIN
              </text>
            </svg>
            <div className="hovertext">Hover to enter details</div>
          </div>

          <div class="main-login">
            <div class="cube">
              <div class="right-login">
                <div class="left-login">
                  <h2>
                    EMAIL
                    <br />
                    ID
                  </h2>
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
                    placeholder="Enter email"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
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
                  <h2>
                    PASS
                    <br />
                    WORD
                  </h2>

                  <div
                    class="dot-login-cont-left"
                    style={{ transform: "rotateZ(45deg)" }}
                  >
                    <div class="dot-login"></div>
                    <div class="dot-login"></div>
                  </div>
                </div>
                <div class="input-login" type="password">
                  <input
                    class="field-login"
                    type="password"
                    placeholder="Enter password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
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
            <input
              type="submit"
              value="LOGIN"
              class="login-btn"
              onClick={handleSubmit}
            />

            <div class="links-login">
              <a id="forgot-pwd" href="./ForgotPassword">
                Forgot Password?
              </a>

              <a href="./Verify">Verify Account</a>
              {/* <a href="./signup" style={{ color: "aliceblue" }}>Sign Up</a> */}
            </div>
          </div>
        </div>
        <Footer
          designed={[
            { name: "Juana", mail: "mailto:ce21b065@smail.iitm.ac.in" },
            { name: "Jahaan", mail: "mailto:" },
          ]}
        />
      </body>
    </>
  );
};

export default Login;
