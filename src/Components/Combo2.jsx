import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import {useState } from "react";
import ComboModal from "./ComboModal";
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
  Tooltip as NewTooltip,
  Spacer,
  Select,
  Textarea,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import {MinusIcon, AddIcon} from "@chakra-ui/icons";
import { filter } from '@chakra-ui/system';

const REGISTER = gql`
mutation ComboOffer($combo: String!, $tShirtsDetails: TShirtsDetails, $workshopsIDs: [String!], $referral: String) {
  ComboOffer(combo: $combo, TShirtsDetails: $tShirtsDetails, workshopsIDs: $workshopsIDs, referral: $referral) {
    eventPay {
      amount
      orderId
      payementId
      paymentSignature
      user{
        name
        email
        address
        mobile
      }
    }
    registered
  }
}`

const PAY = gql`
mutation ComboupdateEventPay($data: UpdateEventPayInput!, $referral: String) {
  ComboupdateEventPay(data: $data, referral: $referral)
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

function Combo({events}) {
  var { isOpen, onOpen, onClose } = useDisclosure();
  const [triggerModal, setTriggerModal]= React.useState(false);
  const [ws, setWs]= React.useState(['', '', '']);
  const [combo, {data, error, loading}]= useMutation(REGISTER);
  const [updateEventPayMutation, {data: updateEventPayData, loading: updateEventPayLoading, error: updateEventPayError}] = useMutation(PAY);
  const filterEvents= events.filter((event)=> event.registrationfee==="500");
  // console.log(ws1);
  // console.log(filterEvents);

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
      name: "Mayhem Combo",
      image: "", //TODO: Add the shaastra link here
      order_id: data?.orderId,

      /******** Handler function to update the payment details ********/
      handler: async function (response) {
        console.log(data.orderId, response.razorpay_order_id)
        try {
          console.log(response.razorpay_signature);
          await updateEventPayMutation({
            variables: {
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

  if (updateEventPayData) {
    onClose = () => {
      window.location.reload();
    };
    return (
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            backgroundColor="white"
            color="black"
          >
            <ModalHeader>Registered Successfully</ModalHeader>
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
            <ModalHeader>{error?.message}</ModalHeader>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }

  return (
    <>
    <Card style={{maxWidth:'30rem'}} className="offer-card">
      <Card.Body>
        <Card.Title>Mayhem Combo</Card.Title>
        <Card.Text>
          Choose any <strong>Three</strong> workshops with INDIVIDUAL registrations from the List at just <strong>Rs. 1199</strong>
        </Card.Text>
        <div className='cardButtonsContainer'>
          <Button className="cardKnowMoreButton" onClick={()=> setTriggerModal(true)}>Show List</Button>
          <Button className="register" onClick={()=> {
            onOpen();
          }}>Get Combo</Button>
        </div>
        <ChakraProvider>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            motionPreset='slideInRight'
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Enter Details</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Workshop-1</FormLabel>
                  <Select placeholder='Select option' onChange={(e)=> {
                    var array=[...ws];
                    array[0]= e.target.value;
                    setWs(array);
                  }} marginBottom={4}>
                    {
                      filterEvents.map((event, index)=> {
                        return (
                          <option value={event.id} key={index}>{event.name}</option>
                        )
                      })
                    }
                  </Select>
                  <FormLabel>Workshop-2</FormLabel>
                  <Select placeholder='Select option' onChange={(e)=> {
                    var array=[...ws];
                    array[1]= e.target.value;
                    setWs(array);
                  }} marginBottom={4}>
                    {
                        filterEvents.map((event, index)=> {
                          if (event.id!==ws[0]){
                            return (
                              <option value={event.id} key={index}>{event.name}</option>
                            )
                          }
                          else {
                            return null;
                          }
                        })
                      }
                  </Select>
                  <FormLabel>Workshop-3</FormLabel>
                  <Select placeholder='Select option' onChange={(e)=> {
                    var array=[...ws];
                    array[2]= e.target.value;
                    setWs(array);
                  }}>
                    {
                        filterEvents.map((event, index)=> {
                          if (event.id!==ws[0] && event.id!==ws[1]){
                            return (
                              <option value={event.id} key={index}>{event.name}</option>
                            )
                          }
                          else {
                            return null;
                          }
                        })
                      }
                  </Select>
                 </FormControl>
              </ModalBody>
              <ModalFooter>
                <NewButton colorScheme='messenger' mr={3} onClick={async(e)=> {
                  e.preventDefault();
                  console.log(ws);
                  await combo({
                    variables: {
                      combo: "Mayhem Combo",
                      tShirtsDetails: {
                        address: '',
                        city: '',
                        pincode: '',
                        shirt: "",
                        size: '',
                        state: '',
                      },
                      referral: '',
                      workshopsIDs: ws,
                    }
                  }).then((res)=> {
                    if (res.data?.ComboOffer?.eventPay?.amount) {
                      console.log(res.data);
                      loadRazorpay(res.data?.ComboOffer.eventPay);
                    }
                  }).then(()=> {
                    onClose();
                  })
                }}>
                  Proceed
                </NewButton>
                <NewButton onClick={onClose}>Cancel</NewButton>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </ChakraProvider>
      </Card.Body>
    </Card>
    <div className='modal'>
      <ComboModal data={filterEvents} show={triggerModal} onHide={() => setTriggerModal(false)} />
    </div>
    </>
  )
}

export default Combo;
