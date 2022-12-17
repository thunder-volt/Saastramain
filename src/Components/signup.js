import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
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

const SIGN_UP = gql`
  mutation Mutation($data: CreateUserInput!) {
    createUser(data: $data)
  }
`;

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    college: "",
    department: "",
    city: "",
    state: "",
    address: "",
  });
  const navigate = useNavigate();
  const [signup, { data, loading, error }] = useMutation(SIGN_UP);

  const [confirm, setConfirm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup({
        variables: {
          data: {
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            password: user.password,
            college: user.college,
            department: user.department,
            city: user.city,
            state: user.state,
            address: user.address,
          },
        },
      }).then((res) => {
        if (res.data?.createUser) {
          navigate("/verify");
        }
      });
    } catch (err) {
      console.log(`error--->${err}`);
    }
  };
  var { isOpen, onOpen, onClose } = useDisclosure();

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
  if (data) {
    navigate("/edit");
  }

  return (
    <section id="signup">
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
          <h1>SIGNUP</h1>
        </div>
      </center>
      <center>
        <form className="signup_form" onSubmit={handleSubmit}>
          <input
            className="type-1 name"
            placeholder="NAME"
            outline="none"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          ></input>
          <div>
            <input
              className="type-3-1 type-3 email"
              placeholder="EMAIL ID"
              outline="none"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            ></input>
            <input
              className="type-3-2 type-3 phone"
              placeholder="PHONE NO."
              outline="none"
              value={user.mobile}
              onChange={(e) => setUser({ ...user, mobile: e.target.value })}
            ></input>
          </div>
          <input
            className="type-1 password"
            placeholder="PASSWORD"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
          <input
            className="type-1 password"
            placeholder="CONFIRM PASSWORD"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          ></input>
          <div>
            {user.password && confirm && user.password !== confirm ? (
              <div class="password-alert">Passwords don't match</div>
            ) : null}
          </div>
          <div>
            <input
              className="type-3-1 type-3 college"
              placeholder="COLLEGE"
              outline="none"
              value={user.college}
              onChange={(e) => setUser({ ...user, college: e.target.value })}
            ></input>
            <input
              className="type-3-2 type-3 branch"
              placeholder="DEPARTMENT"
              outline="none"
              value={user.department}
              onChange={(e) => setUser({ ...user, department: e.target.value })}
            ></input>
          </div>
          <div>
            <input
              className="type-3-1 type-3 city"
              placeholder="CITY"
              outline="none"
              value={user.city}
              onChange={(e) => setUser({ ...user, city: e.target.value })}
            ></input>
            <input
              className="type-3-2 type-3 state"
              placeholder="STATE"
              outline="none"
              value={user.state}
              onChange={(e) => setUser({ ...user, state: e.target.value })}
            ></input>
          </div>
          <input
            className="type-1 address"
            placeholder="ADDRESS"
            value={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
          ></input>
          {user.password && confirm && user.password !== confirm ? (
            <button className="type-2" type="submit" disabled>
              SIGN UP
            </button>
          ) : (
            <button className="type-2" type="submit">
              SIGN UP
            </button>
          )}
        </form>
      </center>
    </section>
  );
};

export default Signup;
