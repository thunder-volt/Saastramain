import React, { useEffect, useState } from "react";
import "./chess.css";
// import Footer from "../../shared/Footer";
// import CustomBox from "../../shared/CustomBox";
import { useColorModeValue } from "@chakra-ui/color-mode";
// import {
//   RegisterChessMutation,
//   useCapturePaymentChessMutation,
//   useGetChessDetailsCsvQuery,
//   useRegisterChessMutation,
// } from "../../../generated/graphql";
// import {
//   Modal,
//   ModalCloseButton,
//   ModalContent,
//   ModalHeader,
//   ModalOverlay,
//   useDisclosure,
// } from "@chakra-ui/react";
// import fileDownload from "js-file-download";
// import dotenv from "dotenv";
import { FaTimes } from "react-icons/fa";
import NavBar from "./Components/Navbar";
import TopBar from "./Components/TopBar";
import {
  ChakraProvider,
  Flex,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { useMutation, gql } from "@apollo/client";

// dotenv.config();

// function loadScript(src) {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// }

const REGISTER_CHESS = gql`
  mutation RegisterChess($data: registerBlitzChessInput!) {
    registerChess(data: $data) {
      id
      isPaid
      orderId
      payementId
      paymentSignature
      rating
      title
      username
      user {
        name
        email
        address
        mobile
      }
    }
  }
`;

const PAY_CHESS = gql`
  mutation CapturePaymentChess($input: CapturePaymentChessInput!) {
    capturePaymentChess(Input: $input)
  }
`;

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

function ChessBlitz() {
  const theme = useColorModeValue("white", "black");
  const [isAlert, setIsAlert] = useState({
    isVisible: false,
    message: "",
  });
  //   const { data: data1 } = useGetChessDetailsCsvQuery();
  const [isAdmin, setIsAdmin] = useState(false);
  var { isOpen, onOpen, onClose } = useDisclosure();
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState("");
  const [title, setTitle] = useState("");
  const [registerchess, { data, loading, error }] = useMutation(REGISTER_CHESS);
  const [
    updateEventPayMutation,
    {
      data: updateEventPayData,
      loading: updateEventPayLoading,
      error: updateEventPayError,
    },
  ] = useMutation(PAY_CHESS);

  useEffect(() => {
    if (localStorage.getItem("role") === "Admin") {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    let ticking;
    if (isAlert.isVisible) {
      ticking = setTimeout(() => {
        setIsAlert({
          isVisible: false,
          message: "",
        });
      }, 5000);
    }
    return () => {
      clearTimeout(ticking);
    };
  }, [isAlert]);

  const loadRazorpay = async (data) => {
    /******** Load Razorpay Script ********/
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }
    console.log(data);
    /******** Razorpay Options ********/
    const options = {
      key: "rzp_live_WQ7VB5TIMbvijH",
      amount: 20000,
      currency: "INR",
      name: "Blitz chess",
      image: "", //TODO: Add the shaastra link here
      order_id: data?.orderId,

      /******** Handler function to update the payment details ********/
      handler: async function (response) {
        console.log(data.orderId, response.razorpay_order_id);
        try {
          console.log(response.razorpay_signature);
          await updateEventPayMutation({
            variables: {
              input: {
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
        type: "BLITZ-CHESS",
      },
      theme: {
        color: "#3399cc",
      },
    };

    /******** Open Razorpay ********/
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  if (updateEventPayData) {
    return (
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent backgroundColor="white" color="black">
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
    <body>
      {/* <TopBar />
      <NavBar /> */}
      <div className={`ChessBlitz ${theme}`}>
        <div className="ChessBlitz_landing">
          <div className="contentBox">
            <div className="checkboard">
              <div className="checkboard-tile-1">
                <div>BLITZ</div>
              </div>
              <div className="checkboard-tile-2"></div>
              <div className="checkboard-tile-2"></div>
              <div className="checkboard-tile-1">
                <div>CHESS</div>
              </div>
            </div>
            <h2>SHAASTRA 2023</h2>
            <p>
              This year, Shaastra, IIT Madras, is hosting the Online Blitz Open
              Chess Championship! Last year's competition drew over 450 players
              from all over the world, including several notable grand masters.
              While we continue to fight the pandemic, we've chosen to hold the
              event online again this year. The competition offers a total prize
              pool of INR 85000, as well as various goodies. Don't miss out on
              your chance to play in the year's largest online blitz tournament!
            </p>
            <HStack>
              <button
                onClick={() =>
                  setIsAlert({
                    isVisible: true,
                    message: "Registration has been closed!!",
                  })
                }
              >
                Registration Closed
              </button>
              <Spacer />
              <button
                onClick={() => {
                  onOpen();
                }}
              >
                Register Now
              </button>
            </HStack>
            <ChakraProvider>
              <Modal
                isOpen={isOpen}
                onClose={onClose}
                motionPreset="slideInRight"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Enter Details</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Enter Username</FormLabel>
                      <Input
                        placeholder="Type here"
                        marginBottom={4}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <FormLabel>Enter Fide Rating</FormLabel>
                      <Input
                        placeholder="Type here"
                        marginBottom={4}
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      />
                      <FormLabel>Enter Fide Title</FormLabel>
                      <Input
                        placeholder="Type here"
                        marginBottom={4}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <NewButton
                      colorScheme="messenger"
                      mr={3}
                      onClick={async (e) => {
                        e.preventDefault();
                        console.log(username, title, rating);
                        await registerchess({
                          variables: {
                            data: {
                              rating: rating,
                              username: username,
                              title: title,
                            },
                          },
                        }).then((res) => {
                          if (res) {
                            loadRazorpay(res?.data?.registerChess);
                          }
                        });
                      }}
                    >
                      Proceed
                    </NewButton>
                    <NewButton onClick={onClose}>Cancel</NewButton>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </ChakraProvider>
            {/* {isAdmin === true ? (
              <button
                style={{
                  padding: "10px 20px",
                  width: "fit-content",
                  backgroundColor: "#311c1b",
                  borderRadius: "4px",
                  marginLeft: "20px",
                }}
                onClick={() => {
                  fileDownload(
                    data1?.getChessDetailsCSV!,
                    `BlitzChess_regristants.csv`
                  );
                }}
              >
                Download Users Data CSV
              </button>
            ) : null} */}
          </div>
        </div>
        <div className="ChessBlitz_Overview">
          <div className="contentBox">
            <div className="card">
              <h4>Prize Money</h4>
              <h2>
                85k <span>+ Chess Premium Memberships</span>
              </h2>
            </div>
            <div className="card">
              <h4>Registration Fee</h4>
              <h2>INR 200</h2>
            </div>
            <div className="card">
              <h4>Event Date</h4>
              <h2>
                16th <span>January 2023</span>
              </h2>
            </div>
            <div className="card">
              <h4>Event Time</h4>
              <h2>9 AM - 12 PM</h2>
            </div>
            <div className="card">
              <h4>Format</h4>
              <h2>
                3 min + 1 sec <span>12 rounds, Swiss tournament</span>
              </h2>
            </div>
            <div className="card">
              <h4>Platform</h4>
              <h2>Chess.com</h2>
            </div>
          </div>
        </div>
        <div className="ChessBlitz_PrizeDistribution">
          <h2>Prize Distribution</h2>
          <div className="main_category">
            <h4>Main Category : </h4>
            <div className="cardBox">
              <div className="card">
                <h4>1st</h4>
                <h3>Rs 20000</h3>
              </div>
              <div className="card">
                <h4>2nd</h4>
                <h3>Rs 15000</h3>
              </div>
              <div className="card">
                <h4>3rd</h4>
                <h3>Rs 10000</h3>
              </div>
              <div className="card">
                <h4>4th</h4>
                <h3>Rs 5000</h3>
              </div>
              <div className="card">
                <h4>5th</h4>
                <h3>Rs 3000</h3>
              </div>
              <div className="card">
                <h4>6th</h4>
                <h3>Rs 1500</h3>
              </div>
              <div className="card">
                <h4>7th - 11th</h4>
                <h3>Rs 1250</h3>
              </div>
              <div className="card">
                <h4>12th - 16th</h4>
                <h3>Rs 1000</h3>
              </div>
              <div className="card">
                <h4>17th - 21st</h4>
                <h3>Rs 750</h3>
              </div>
              <div className="card">
                <h4>22th - 25th</h4>
                <h3>Rs 500</h3>
              </div>
            </div>
          </div>
          <div className="rated_category">
            <h4>Rated Categories : </h4>
            <div className="twrapper">
              <table>
                <tr>
                  <td>Rank</td>
                  <td>Unrated</td>
                  <td>Below 1400</td>
                  <td>1400 - 1600</td>
                  <td>1600 - 1800</td>
                </tr>
                <tr>
                  <td>1st</td>
                  <td>1000</td>
                  <td>1000</td>
                  <td>1000</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>750</td>
                  <td>750</td>
                  <td>750</td>
                  <td>750</td>
                </tr>
                <tr>
                  <td>3rd</td>
                  <td>500</td>
                  <td>500</td>
                  <td>500</td>
                  <td>500</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="rated_category">
            <h4>Age Categories : </h4>
            <div className="twrapper">
              <table>
                <tr>
                  <td>Rank</td>
                  <td>U - 16</td>
                  <td>U - 14</td>
                  <td>U - 12</td>
                  <td>U - 10</td>
                </tr>
                <tr>
                  <td>1st</td>
                  <td>2 months Chess.com subscription</td>
                  <td>2 months Chess.com subscription</td>
                  <td>2 months Chess.com subscription</td>
                  <td>2 months Chess.com subscription</td>
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>1 month Chess.com subscription</td>
                  <td>1 month Chess.com subscription</td>
                  <td>1 month Chess.com subscription</td>
                  <td>1 month Chess.com subscription</td>
                </tr>
                <tr>
                  <td>3rd</td>
                  <td>1 month Chess.com subscription</td>
                  <td>1 month Chess.com subscription</td>
                  <td>1 month Chess.com subscription</td>
                  <td>1 month Chess.com subscription</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="rated_category">
            {/* <h4>Other Categories : </h4> */}
            <div className="twrapper">
              <table>
                <tr>
                  <td>Rank</td>
                  <td>Best Woman</td>
                  <td>Best Veteran</td>
                  <td>Best IITM</td>
                </tr>
                <tr>
                  <td>1st</td>
                  <td>1000</td>
                  <td>1000</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>750</td>
                  <td>750</td>
                  <td>2 months Chess.com subscription</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="ChessBlitz_Contact">
          <h2>Contact</h2>
          <div className="ContactBox">
            <div className="emailBox">
              <h4>Email</h4>
              <p>rapidchess@shaastra.org</p>
            </div>
            <div className="emailBox">
              <h4>Phone</h4>
              <p>
                <span>Shyam Sundar PB : </span>
                <span>+91 7397259369</span>
              </p>
              <p>
                <span>Aditya S Sadhu : </span>
                <span>+91 9566129422</span>
              </p>
            </div>
          </div>
        </div>
        {/* <Footer
          designed={[{ name: "Rohit", mail: "cs19b038@smail.iitm.ac.in" }]}
        /> */}
        <div
          className={`AlertPopupsContainer ${
            isAlert.isVisible ? "active" : ""
          }`}
        >
          <button
            onClick={() => {
              setIsAlert({
                isVisible: false,
                message: "",
              });
            }}
          >
            <FaTimes />
          </button>
          <div className="alertBox">{isAlert.message}</div>
        </div>
      </div>
    </body>
  );
}

export default ChessBlitz;
