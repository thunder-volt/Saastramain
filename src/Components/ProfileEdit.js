import React, { useState, useEffect } from "react";
import NavBar from "./navigation/NavBar";
import Footer from "./Footer";
import { gql, useQuery, useMutation } from "@apollo/client";
import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";

const GET_ME = gql`
  query Query {
    me {
      name
      shaastraID
      college
      address
      email
      city
      department
      mobile
      state
    }
  }
`;

const EDIT_ME = gql`
  mutation EditProfile($data: EditProfileInput!) {
    editProfile(data: $data)
  }
`;

const Profile = () => {
  //   const Data = [
  //     {
  //       name: "Akshay",
  //       id: 123456,
  //       college: "IIM",
  //       address: "Chennaicfvbjkghfvhjhgfklv b,c;kjhvjbjkhg",
  //       events: ["ertyui", "dfghjk", "edrtfgy"],
  //     },
  //   ];
  const { data, loading, error } = useQuery(GET_ME);
  const [editFunction, { data: isEdited, loading: isLoading, error: isError }] =
    useMutation(EDIT_ME, {
      refetchQueries: [{ query: GET_ME }],
    });
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    college: "",
    department: "",
    city: "",
    state: "",
    address: "",
    id: "",
  });

  var { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setUser({
      name: data ? data?.me?.name : "",
      email: data ? data?.me?.email : "",
      mobile: data ? data?.me?.mobile : "",
      college: data ? data.me?.college : "",
      department: data ? data?.me?.department : "",
      city: data ? data?.me?.city : "",
      state: data ? data?.me?.state : "",
      address: data ? data?.me?.address : "",
      id: data ? data?.me?.shaastraID : "",
    });
  }, [data]);

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

  if (isLoading) {
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
      window.location.reload();
    };
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

  if (isError) {
    onClose = () => {
      window.location.reload();
    };
    return (
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent backgroundColor="red" color="black">
            <ModalHeader>{isError.message}</ModalHeader>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }

  if (isEdited) {
    onClose = () => {
      window.location.reload();
    };
    return (
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent backgroundColor="white" color="black">
            <ModalHeader>Saved Successfully</ModalHeader>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }

  if (data) {
    return (
      <body>
        <NavBar></NavBar>
        <section className="profilecont">
          <div>
            <div className="heading">EDIT PROFILE</div>
            <div className="pcontainer">
              <div className="pcontainer-image">
                <div className="profile-img"></div>
                <div className="id-title">SHAASTRA ID</div>
                <div className="shaastra-id">{user.id}</div>
              </div>
              <div className="container-info1">
                <div className="name">Name</div>
                <input
                  className="name-edit"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <div className="college">COLLEGE/OCCUPATION</div>
                <input
                  className="college-edit"
                  value={user.college}
                  onChange={(e) =>
                    setUser({ ...user, college: e.target.value })
                  }
                />
                <div className="address">ADDRESS</div>
                <input
                  className="address-edit"
                  value={user.address}
                  onChange={(e) =>
                    setUser({ ...user, address: e.target.value })
                  }
                />
                <button
                  className="save"
                  onClick={async (e) => {
                    e.preventDefault();
                    await editFunction({
                      variables: {
                        data: {
                          name: user.name,
                          email: user.email,
                          mobile: user.mobile,
                          college: user.college,
                          department: user.department,
                          city: user.city,
                          state: user.state,
                          address: user.address,
                        },
                      },
                    })
                      .then((res) => console.log(res.data))
                      .catch((e) => console.log(e));
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer designed={[{name: " Akshay",mail:"mailto:ce21b006@smail.iitm.ac.in"}]}/>
      </body>
    );
  }
};

export default Profile;
