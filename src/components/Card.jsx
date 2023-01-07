import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import {useState } from "react";
import KnowMoreModal from "./Modal";
import "../App.css";
import nextImage from "../assets/next.png";
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import React from 'react'
import {useNavigate} from 'react-router-dom'


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
  RadioGroup,
  ModalFooter,
  Button as NewButton,
  HStack,
} from "@chakra-ui/react";
import {MinusIcon, AddIcon} from "@chakra-ui/icons"


const REGISTER = gql`
  mutation register($eventId: String!, $referral: String!){
    register(EventID: $eventId, referral: $referral){
      eventPay{
    amount
    orderId
    payementId
    paymentSignature
    event{
      name
    }
    user{
      name
      email
      address
      mobile
    }
  }
  registered
  
    }
  }
`

const TEAM_REGISTER = gql`
  mutation createTeamAndRegister($data: CreateTeamInput!){
    createTeamAndRegister(data: $data)
  }
`

const PAY = gql`
  mutation pay($eventId: String!, $data: UpdateEventPayInput!, $referral: String!){
  updateEventPay(EventId: $eventId,data:$data, referral: $referral)
}
`

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function CardComponent({data: el}){
   let [triggerModal,setTriggerModal] = useState(false);
   var { isOpen, onOpen, onClose } = useDisclosure();
   const [members, setMembers] = React.useState([""]);
   const [teamname, setTeamname] = React.useState("");

   const handleMembers= ({index, event})=> {
    let memberList= [...members];
    memberList[index]= event.target.value;
    setMembers(memberList); 

   }

   const handleAdd=()=> {
    setMembers([...members, ""]);
   }

   const handleProceed= async(e)=> {
    e.preventDefault();
    console.log(members);
    if (members) {
      let memberList=members.filter((member)=> member!=="");
        await teamRegistrationMutation( {
          variables: {
            data: {
              id: el?.id,
              name: teamname,
              members: memberList
            }
          }
        })
    }}

   const navigate = useNavigate()

   const [registerMutation, {data, loading, error}] = useMutation(REGISTER)

   const [teamRegistrationMutation, {data: team, loading: teamLoading, error: teamError}] = useMutation(TEAM_REGISTER)
   const [updateEventPayMutation, {data: updateEventPayData, loading: updateEventPayLoading, error: updateEventPayError}] = useMutation(PAY)

   const loadRazorpay = async (
    data
  ) => {
    /******** Load Razorpay Script ********/
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }
    console.log(data)
    /******** Razorpay Options ********/
    const options = {
      key: "rzp_live_WQ7VB5TIMbvijH",
      amount: data?.amount,
      currency: "INR",
      name: data?.event.name,
      image: "", //TODO: Add the shaastra link here
      order_id: data?.orderId,

      /******** Handler function to update the payment details ********/
      handler: async function (response) {
        console.log(data.orderId, response.razorpay_order_id)
        try {
          console.log(response.razorpay_signature);
          await updateEventPayMutation({
            variables: {
              eventId: el?.id,
              referral: '',
              data: {
                orderId: response.razorpay_order_id,
                payementId: response.razorpay_payment_id,
                paymentSignature: response.razorpay_signature,
              },
            },
          });
        } catch (e) {
          console.log(e);
        }
      },
      prefill: {
        name: data?.user.name,
        email: data?.user.email,
        contact: data?.user.mobile,
      },
      notes: {
        address: data?.user.address,
        type: "WORKSHOPS"
      },
      theme: {
        color: "#3399cc",
      },
    };

    /******** Open Razorpay ********/
    const rzp1 = new (window).Razorpay(options);
    rzp1.open();
  };

  if(el?.registrationFee === '0' || el.registrationType==="TEAM")
   if (data || team) {
    console.log(team, "from success");
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
   if (loading || teamLoading) {
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
  if (error || teamError) {
    onClose = () => {
      window.location.reload();
    };
    return (
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent color="black">
            <ModalHeader>{error?.message}{teamError?.message}</ModalHeader>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }

    return(
        <>
        <Card style={{ maxWidth: '30rem'}}>
        <Card.Img variant="top" src={el?.pic} />
        <Card.Body>
          <Card.Title>{el?.name}</Card.Title>
          <Card.Text>
      {el?.description}
          </Card.Text>
          <div className="cardButtonsContainer">
          <Button className="cardKnowMoreButton" onClick={()=>setTriggerModal(true)}>Know more</Button>
          <Button className="register" onClick={async () => {
            console.log(el?.registrationfee)
            if(el?.registrationfee == "0")
            {
              window.location.href = el?.requirements
            }
            if (el?.registrationType === 'INDIVIDUAL'){
                if (el?.registrationfee !== '0') {
                  await registerMutation({
                    variables: {
                      eventId: el?.id,
                      referral: ''
                    }
                   }).then(() => loadRazorpay(data.register.eventPay))
                }
            if (el?.registrationType === 'TEAM'){
              console.log(el?.teamSize);
              onOpen();
            }
          }
          }} >Register</Button> 
          </div>
          <ChakraProvider>
              <Modal
                isOpen={isOpen}
                onClose={onClose}
                motionPreset='slideInRight'
              >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Enter Team Details</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Team Name</FormLabel>
                  <Input placeholder='Type here' marginBottom={4} value={teamname} onChange={(e)=> setTeamname(e.target.value)} />
                </FormControl>
                {
                  members.map((member, index)=> {
                    return (
                      <FormControl key={index+1}>
                        <FormLabel>Shaastra ID of team-mate {index+1}</FormLabel>
                        <HStack marginBottom={4}>
                          <Input value={member} placeholder='Type here' onChange={(event)=> handleMembers({index, event})} />
                          {
                            (index===el.teamSize-2) ? null : (
                              <NewButton onClick={handleAdd}><AddIcon /></NewButton>
                            )
                          }
                          {
                            (index === 0) ? null : (
                              <NewButton onClick={()=> {
                                const memberList= [...members];
                                memberList.splice(index,1);
                                setMembers(memberList)
                              }}><MinusIcon /></NewButton>
                            )
                          }
                        </HStack>
                      </FormControl>
                    )
                  })
                }
              </ModalBody>

              <ModalFooter>
                <NewButton colorScheme='messenger' mr={3} onClick={(e)=> handleProceed(e)}>
                  Proceed
                </NewButton>
                <NewButton onClick={onClose}>Cancel</NewButton>
              </ModalFooter>
            </ModalContent>
          </Modal>
          </ChakraProvider>
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