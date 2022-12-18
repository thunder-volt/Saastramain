import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import {useState } from "react";
import KnowMoreModal from "./Modal";
import "../App.css";
import nextImage from "../assets/next.png";
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import React from 'react'


import {
  ChakraProvider,
  Flex,
  SimpleGrid,
  Modal,
  ModalOverlay,  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalCloseButton,
  ModalBody,
  Input, 
  Radio,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import {MinusIcon, AddIcon} from "@chakra-ui/icons"

const REGISTER = gql`
  mutation register($id: String!, $referral: String!){
    register(EventID: $id, referral: $referral){
      registered
    }
  }
`

function CardComponent({data: el}){
   let [triggerModal,setTriggerModal] = useState(false);
   var { isOpen, onOpen, onClose } = useDisclosure();
   const [members, setMembers] = React.useState([]);
   const [teamname, setTeamname] = React.useState();

   const [registerMutation, {data, loading, error}] = useMutation(REGISTER)

   const handleMembersInput = ({
    index,
    event,
  }) => {
    const values = [...members];

    values[index] = event.target.value;
    setMembers(values);
  };

   if (data) {
    onClose = () => {
      window.location.reload()
    }
    return (
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            color="black"
          >
            <ModalHeader>Registered successfully.</ModalHeader>
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
  if (error) {
    onClose = () => {
      window.location.reload();
    };
    return (
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent color="black">
            <ModalHeader>{error.message}</ModalHeader>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }

    return(
        <>
        <Card style={{ maxWidth: '30rem' }}>
        <Card.Img variant="top" src={el?.pic} />
        <Card.Body>
          <Card.Title>{el?.name}</Card.Title>
          <Card.Text>
      {el?.description}
          </Card.Text>
          <div className="cardButtonsContainer">
          <Button className="cardKnowMoreButton" onClick={()=>setTriggerModal(true)}>Know more
          <span><img className="nextIcon" src={nextImage} alt="" srcset="" /></span>
          </Button>
          <Button className="register" onClick={async () => {
            if (el?.registrationType == 'INDIVIDUAL'){
              console.log('register', el?.id)
             await registerMutation({
              variables: {
                id: el?.id,
                referral: ''
              }
             }) 
            }
            if (el?.registrationType == 'TEAM'){
              console.log(el?.teamSize)
             
            }
          }} >Register</Button> 
          </div>
        </Card.Body>
      </Card>
      <div className="modal">
      <KnowMoreModal 
              data={el}
              show={triggerModal}
              onHide={() => setTriggerModal(false)}
              /></div>
      </>
    )
}

export default CardComponent;