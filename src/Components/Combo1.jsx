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
  const [value, setValue]= React.useState('');
  const [ws, setWs]= React.useState(['', '']);
  // const [ws2, setWs2]= React.useState('');
  const [city, setCity]= React.useState('');
  const [state, setState]= React.useState('');
  const [address, setAddress]= React.useState('');
  const [pin, setPin]= React.useState({d1:0, d2:0, d3:0, d4:0, d5:0, d6:0});
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
      name: "Merry Combo",
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
        <Card.Title>Merry Combo</Card.Title>
        <Card.Text>
          Choose any <strong>Two</strong> workshops with INDIVIDUAL registrations from the List and get a free Discovery T-shirt at just <strong>Rs. 999</strong>
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
                  <FormLabel>T-Shirt Size (Measurements in inches)</FormLabel>
                  <RadioGroup onChange={setValue} value={value}>
                    <HStack marginBottom={4}>
                      <NewTooltip label="Chest:34 Length:24">
                       <div>
                          <Radio value="XS">XS</Radio>
                      </div>
                      </NewTooltip>
                      <Spacer />
                      <NewTooltip label="Chest:36 Length:25">
                       <div>
                          <Radio value="S">S</Radio>
                      </div>
                      </NewTooltip>
                      <Spacer />
                      <NewTooltip label="Chest:38 Length:26">
                       <div>
                          <Radio value="M">M</Radio>
                      </div>
                      </NewTooltip>
                      <Spacer />
                      <NewTooltip label="Chest:40 Length:27">
                       <div>
                          <Radio value="L">L</Radio>
                      </div>
                      </NewTooltip>
                      <Spacer />
                      <NewTooltip label="Chest:42 Length:28">
                       <div>
                          <Radio value="XL">XL</Radio>
                      </div>
                      </NewTooltip>
                      <Spacer />
                      <NewTooltip label="Chest:44 Length:29">
                       <div>
                          <Radio value="2XL">2XL</Radio>
                      </div>
                      </NewTooltip>
                    </HStack>
                  </RadioGroup>
                  <FormLabel>City</FormLabel>
                  <Input placeholder='Type here' marginBottom={4} value={city} onChange={(e)=> setCity(e.target.value)} />
                  <FormLabel>State</FormLabel>
                  <Input placeholder='Type here' marginBottom={4} value={state} onChange={(e)=> setState(e.target.value)} />
                  <FormLabel>Address</FormLabel>
                  <Textarea placeholder='Type here' marginBottom={4} value={address} onChange={(e)=> setAddress(e.target.value)} />
                  <FormLabel>Pin Code</FormLabel>
                  <HStack>
                    <PinInput>
                      <PinInputField value={pin.d1} onChange={(e)=> setPin({...pin, d1:e.target.value})} />
                      <PinInputField value={pin.d2} onChange={(e)=> setPin({...pin, d2:e.target.value})} />
                      <PinInputField value={pin.d3} onChange={(e)=> setPin({...pin, d3:e.target.value})} />
                      <PinInputField value={pin.d4} onChange={(e)=> setPin({...pin, d4:e.target.value})} />
                      <PinInputField value={pin.d5} onChange={(e)=> setPin({...pin, d5:e.target.value})} />
                      <PinInputField value={pin.d6} onChange={(e)=> setPin({...pin, d6:e.target.value})} />
                    </PinInput>
                  </HStack>
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <NewButton colorScheme='messenger' mr={3} onClick={async(e)=> {
                  e.preventDefault();
                  var code= pin.d1+pin.d2+pin.d3+pin.d4+pin.d5+pin.d6;
                  console.log(address);
                  await combo({
                    variables: {
                      combo: "Merry Combo",
                      tShirtsDetails: {
                        address: address,
                        city: city,
                        pincode: code,
                        shirt: "Discovery T-shirt",
                        size: value,
                        state: state,
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
