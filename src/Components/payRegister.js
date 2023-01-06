import React from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation register($id: String!, $referral: String!){
    register(EventID: $id, referral: $referral){
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

const PAY = gql`
  mutation pay($id: String!, $data: updateEventPayInput!, $referral: String!){
  updateEventPay(EventId: $id,data:$data, referral: $referral)
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

const PayRegister = () => {
  var {id} = useParams()
    const navigate = useNavigate();
  var { isOpen, onOpen, onClose } = useDisclosure();
  const [referral , setReferral] = React.useState("");
  const [registerMutation, {data, loading, error}] = useMutation(REGISTER, {
    /******** On create order completion, open Razorpay ********/
    async onCompleted(data) {
      if (data.register.eventPay) {
        await loadRazorpay(data.register.eventPay);
      }
    },
  });
  const [updateEventPayMutation, {data: updateEventPayData, loading: updateEventPayLoading, error: updateEventPayError}] = useMutation(PAY)

  /******** Mutation Hook ********/

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
          await updateEventPayMutation({
            variables: {
              eventId: id,
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

  /******** Register Handler ********/
  const registerHandler = async () => {
    try {
      /******** Create OrderID ********/
      console.log(id)
      if (id)
      await registerMutation({
        variables: {
          id: id,
          referral 
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (data?.register?.eventPay) {
     loadRazorpay(data.register.eventPay);
  }

  if (updateEventPayData?.updateEventPay) {
    const onClose = () => {
      window.location.reload();
    };
  //   if(referral){  
  //   try {
  //     const Func = async() => {
  //       let coursename = data.name;
  //       let referalcode = referral;
  //       await axios.post('https://sheet.best/api/sheets/f8d10436-8ee1-42ef-87ab-3e17a9c99d1c',{
  //         referalcode,coursename
  //       }).then((response)=>{
  //         sessionStorage.clear();
  //         console.log(response);
  //       }).catch(e=>{
  //         console.log(e);
  //       });
  //     }
  //     Func();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
    return (
      <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="#addfd0" color="black">
          <ModalHeader>Registered Successfully</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
  }

  if (updateEventPayError || error) {
    error
      ? (onClose = () => {
          if (error.message === "Please login to continue") {
            navigate("/login");
          }
          window.location.reload();
        })
      : (onClose = () => {
          window.location.reload();
        });
    return (
      <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="#f1aaaa" color="black">
          <ModalHeader>
            Some error occurred {updateEventPayError?.message} {error?.message}
          </ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
  }

  if (loading || updateEventPayLoading)
    return (
      <Modal isOpen={true} onClose={() => window.location.reload()}>
        <ModalOverlay />
        <ModalContent backgroundColor="#addfd0" color="black">
          <ModalHeader>
            Don't refresh or close until you get a successfull message.
            Loading...
          </ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
      registerHandler()
  // return (
  //   <div>
  //        <Flex
  //           marginRight={"2vw"}
  //           marginTop="2vh"
  //           flexDirection={['column','column','row','row']}
  //           height={[
  //             "fit-content",
  //             "fit-content",
  //             "fit-content",
  //             "fit-content",
  //           ]}
  //         >
  //                    <Input
  //                           width={["100%","100%","50%","50%"]}
  //                           value={referral}
  //                           mx={[0,0,3,3]}
  //                           my={[2,2,0,0]}
  //                           placeholder="Have a Referal Code?"
  //                           onChange={(e) => setReferral(e.target.value)}
  //                           type={"text"}
  //                           borderBottom="2px solid white"
  //                       />
  //           <Button
  //             backgroundColor={"rgb(171, 228, 156)"}
  //             color="black"
  //             padding={["0.5vw", "0.5vw", "0.5vw", "1.25vw"]}
  //             fontSize={["2vw", "2vw", "2vw", "1vw"]}
  //             onClick={registerHandler}
  //             // onClick={
  //             //   //() => IndividualReg(data.id)
  //             // }
  //           >
  //             REGISTER NOW
  //           </Button>
  //         </Flex>
  //   </div>
  // );
};

export default PayRegister;