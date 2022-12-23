import React from 'react'
import './profile.css'
import NavBar from './navigation/NavBar'
import Footer from './Footer'
import { useMutation, useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
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

const GET_ME = gql`
  query Query {
    me {
      mobile
      name
      email
      id
      shaastraID
      college
      department
      address
      state 
      city
      registeredEvents{
        name
      }
    }
  }
`;

const Profile = () => {
    const [user, setUser] = React.useState({
        name: "",
        email: "",
        mobile: "",
        college: "",
        department: "",
        city: "",
        state: "",
        address: "",
      });

    const navigate = useNavigate();
    const { loading, error, data } = useQuery(GET_ME);
    const Data = [{ name: "Akshay", id: 123456, college: "IIM", address: "Chennaicfvbjkghfvhjhgfklv b,c;kjhvjbjkhg", events: ["ertyui", "dfghjk", "edrtfgy"] }]
    
    if (loading) {
        return (
          <ChakraProvider>
            <Modal isOpen={true}>
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
        var onClose = () => window.location.reload()
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

    console.log(data)
    return (
        <body>
            <TopBar />
            <NavBar />
            <section className='profilecont'>
        <div className='pcontainer'>
        <div className='pcontainer-image'>
                    <div className='profile-img'></div>
                    <div className='name'>{data?.me?.name}</div>
                    <div className='id-title'>SHAASTRA ID</div>
                    <div className='shaastra-id'>{data?.me?.shaastraID}</div>
                </div>
                <div className='pcontainer-info'>
                        <div className='college'>COLLEGE/OCCUPATION</div>
                        <div className='college-info'>{data?.me?.college}</div>
                        <div className='address'>ADDRESS</div>
                        <div className='address-info'>{data?.me?.address} <br /> {data?.me?.city} <br /> {data?.me?.state}</div>
                        <div className='events'>EVENTS/WORKSHOP REGISTERED</div>
                        <div className='events-info'><ol className='event'>{data?.me?.registeredEvents.map((event) => {
                            return <li>{event?.name}</li>
                        })}</ol></div>
                        <button className='edit' onClick={() => navigate('/edit')}>EDIT PROFILE</button>
                    </div>

        </div>
        </section>
        <Footer designed={[{name: " Akshay",mail:"mailto:ce21b006@smail.iitm.ac.in"}]}/>
    </body>
    )
}

export default Profile
