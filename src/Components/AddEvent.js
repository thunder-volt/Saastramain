import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import {
  Button,
  ChakraProvider,
  Flex,
  Spacer,
  Textarea,
  FormControl,
  Input,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import aws from "aws-sdk";

const s3 = new aws.S3({
  endpoint: "https://sfo3.digitaloceanspaces.com/",
  accessKeyId: "DO009DR9PPMJJQXKRN2R", // Access key pair. You can create access key pairs using the control panel or API.
  secretAccessKey: "Zn6p96YD6E7Xa9F7mRdaw6p+Cx6sSYHDpYzXKNL0c+Q",
});

const ADD_EVENT = gql`
  mutation AddEvent($data: AddEventInput!) {
    addEvent(data: $data) {
      id
      name
      description
      pic
    }
  }
`;

const ADD_FAQ = gql`
  mutation CreateEventFAQ($eventId: String!, $data: CreateEventFAQInput!) {
    createEventFAQ(EventID: $eventId, data: $data)
  }
`;

const Add = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(require("./cardimg.png"));
  const [container, setContainer] = useState("");
  const [initial, setInitial] = useState(true);
  const [event, setEvent] = useState({
    name: "",
    teamSize: 1,
    desc: "",
    regStart: "",
    regEnd: "",
    evStart: "",
    evEnd: "",
    fee: 0,
    vertical: "AEROFEST",
    participation: "INDIVIDUAL",
    platform: "",
    participation_points: 0,
    winner_points: 0,
    runner_up_points: 0,
    third_pos_points: 0,
    requirements: "",
  });
  const [faqs, setfaqs] = useState([{ question: "", answer: "" }]);
  const [addEventMutation, { data, error, loading }] = useMutation(ADD_EVENT);
  const [addfaq] = useMutation(ADD_FAQ);
  var { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleFqsInput = ({ index, event }) => {
    //makes a shallow copy
    const values = [...faqs];
    // console.log(values);
    values[index][event.target.name] = event.target.value;
    setfaqs(values);
  };

  useEffect(() => {
    if (selectedImage) {
      setInitial(false);
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  if (loading) {
    return (
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            backgroundColor="rgba(198, 177, 211, 0.9)"
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

  if (data) {
    onClose = async () => {
      navigate("/admin");
    };
    return (
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent backgroundColor="#addfd0" color="black">
            <ModalHeader>Event Added</ModalHeader>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }

  return (
    <body className="edit-page-main-container_new">
      <ChakraProvider>
        <div className="edit-page-main-container">
          <div className="heading">Add Item</div>
          <div className="fields-container">
            <div className="container-right">
              {imageUrl && selectedImage && (
                <div className="image-container">
                  <div className="image-preview">Image Preview:</div>
                  <img src={imageUrl} alt={selectedImage.name} width="90%" />
                </div>
              )}
              {initial ? (
                <div className="image-container">
                  <div className="image-preview">Image Preview:</div>
                  <img src={imageUrl} width="90%" alt="profile" />
                </div>
              ) : null}
              <div className="select-image">
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  onChange={(e) => {
                    setSelectedImage(e.target.files[0]);
                    setContainer(
                      `https://shaastra23.sfo3.digitaloceanspaces.com/${e.target.files[0].name}`
                    );
                  }}
                />
                <br />
                <Button
                  onClick={async (e) => {
                    e.preventDefault();
                    console.log(container);
                    try {
                      const s3params = {
                        Bucket: "shaastra23",
                        Key: selectedImage.name,
                        ContentType: selectedImage.type,
                        Body: selectedImage,
                        ACL: "public-read",
                      };
                      await s3.upload(s3params).promise();
                    } catch (error) {
                      console.log(`error--->${error}`);
                    }
                  }}
                >
                  Upload Image
                </Button>
              </div>
            </div>
            <div className="container-left">
              <Flex className="edit-first-row">
                <Spacer />
                <div className="field-group">
                  <label htmlFor="name" className="input-labels">
                    Add name
                  </label>
                  <br />
                  <input
                    type="text"
                    id="name"
                    value={event.name}
                    onChange={(e) =>
                      setEvent({ ...event, name: e.target.value })
                    }
                  />
                </div>
                <Spacer />
                <div className="field-group">
                  <label htmlFor="vertical-select" className="input-labels">
                    Select Vertical
                  </label>
                  <br />
                  <select
                    id="vertical-select"
                    placeholder="Vertical"
                    onChange={(e) => {
                      setEvent({ ...event, vertical: e.target.value });
                    }}
                  >
                    <option value="AEROFEST">AeroFest</option>
                    <option value="BIOGEN">Biogen</option>
                    <option value="BEVENTS">BEvents</option>
                    <option value="CL">Coding & Logic</option>
                    <option value="DB">Design & Build</option>
                    <option value="ELECFEST">ElecFest</option>
                    <option value="HACKATHONS">Hackathon</option>
                    <option value="IGNITE">Ignite</option>
                    <option value="STRATEGISTS">Strategists</option>
                    <option value="WORKSHOPS">Workshops</option>
                  </select>
                </div>
                <Spacer />
              </Flex>
              <div className="edit-desc">
                <label htmlFor="add-new-desc" className="input-labels">
                  Add description
                </label>
                <br />
                <Textarea
                  id="add-new-desc"
                  value={event.desc}
                  onChange={(e) => setEvent({ ...event, desc: e.target.value })}
                />
              </div>
              <Flex className="edit-first-row">
                <Spacer />
                <div className="field-group">
                  <label htmlFor="platform" className="input-labels">
                    Venue
                  </label>
                  <br />
                  <input
                    type="text"
                    id="platform"
                    value={event.platform}
                    onChange={(e) =>
                      setEvent({ ...event, platform: e.target.value })
                    }
                  />
                </div>
                <Spacer />
                <div className="field-group">
                  <label htmlFor="requirements" className="input-labels">
                    Requirements
                  </label>
                  <br />
                  <input
                    type="text"
                    id="requirements"
                    value={event.requirements}
                    onChange={(e) =>
                      setEvent({ ...event, requirements: e.target.value })
                    }
                  />
                </div>
                <Spacer />
              </Flex>
              <Flex className="edit-first-row">
                <Spacer />
                <div className="field-group">
                  <label htmlFor="reg-start" className="input-labels">
                    Registration Start
                  </label>
                  <br />
                  <input
                    type="datetime-local"
                    id="reg-start"
                    value={event.regStart}
                    onChange={(e) =>
                      setEvent({ ...event, regStart: e.target.value })
                    }
                  />
                </div>
                <Spacer />
                <div className="field-group">
                  <label htmlFor="reg-end" className="input-labels">
                    Registration End
                  </label>
                  <br />
                  <input
                    type="datetime-local"
                    id="reg-end"
                    value={event.regEnd}
                    onChange={(e) =>
                      setEvent({ ...event, regEnd: e.target.value })
                    }
                  />
                </div>
                <Spacer />
              </Flex>
              <Flex className="edit-first-row">
                <Spacer />
                <div className="field-group">
                  <label htmlFor="ev-start" className="input-labels">
                    Event Start
                  </label>
                  <br />
                  <input
                    type="datetime-local"
                    id="ev-start"
                    value={event.evStart}
                    onChange={(e) =>
                      setEvent({ ...event, evStart: e.target.value })
                    }
                  />
                </div>
                <Spacer />
                <div className="field-group">
                  <label htmlFor="ev-end" className="input-labels">
                    Event End
                  </label>
                  <br />
                  <input
                    type="datetime-local"
                    id="ev-end"
                    value={event.evEnd}
                    onChange={(e) =>
                      setEvent({ ...event, evEnd: e.target.value })
                    }
                  />
                </div>
                <Spacer />
              </Flex>
              <Flex className="edit-first-row">
                <Spacer />
                <div className="field-group">
                  <label
                    htmlFor="participation_points"
                    className="input-labels"
                  >
                    Participation Points
                  </label>
                  <br />
                  <input
                    type="number"
                    id="participation_points"
                    value={event.participation_points}
                    onChange={(e) =>
                      setEvent({
                        ...event,
                        participation_points: e.target.value,
                      })
                    }
                  />
                </div>
                <Spacer />
                <div className="field-group">
                  <label htmlFor="winner_points" className="input-labels">
                    Winner Points
                  </label>
                  <br />
                  <input
                    type="number"
                    id="winner_points"
                    value={event.winner_points}
                    onChange={(e) =>
                      setEvent({ ...event, winner_points: e.target.value })
                    }
                  />
                </div>
                <Spacer />
              </Flex>
              <Flex className="edit-first-row">
                <Spacer />
                <div className="field-group">
                  <label htmlFor="runner_up_points" className="input-labels">
                    Runner Up Points
                  </label>
                  <br />
                  <input
                    type="number"
                    id="runner_up_points"
                    value={event.runner_up_points}
                    onChange={(e) =>
                      setEvent({ ...event, runner_up_points: e.target.value })
                    }
                  />
                </div>
                <Spacer />
                <div className="field-group">
                  <label htmlFor="third_pos_points" className="input-labels">
                    Third Position Points
                  </label>
                  <br />
                  <input
                    type="number"
                    id="third_pos_points"
                    value={event.third_pos_points}
                    onChange={(e) =>
                      setEvent({ ...event, third_pos_points: e.target.value })
                    }
                  />
                </div>
                <Spacer />
              </Flex>
              <Flex className="edit-first-row">
                <Spacer />
                <div className="field-group-fee">
                  <label htmlFor="reg-fee" className="input-labels">
                    Registration Fee(INR)
                  </label>
                  <br />
                  <input
                    type="number"
                    id="reg-fee"
                    value={event.fee}
                    onChange={(e) =>
                      setEvent({ ...event, fee: e.target.value })
                    }
                  />
                </div>
                <Spacer />
              </Flex>
              <Flex className="edit-first-row">
                <Spacer />
                <div className="field-group-fee">
                  <label htmlFor="participation" className="input-labels">
                    Participation
                  </label>
                  <br />
                  <select
                    id="participation"
                    placeholder="Team or Individual"
                    onChange={(e) => {
                      setEvent({ ...event, participation: e.target.value });
                    }}
                  >
                    <option value="INDIVIDUAL">Individual</option>
                    <option value="TEAM">Team</option>
                  </select>
                </div>
                <Spacer />
              </Flex>
              {event.participation === "TEAM" ? (
                <Flex className="edit-first-row">
                  <Spacer />
                  <div className="field-group-fee">
                    <label htmlFor="teamSize" className="input-labels">
                      Team Size
                    </label>
                    <br />
                    <input
                      type="number"
                      id="teamSize"
                      value={event.teamSize}
                      onChange={(e) =>
                        setEvent({ ...event, teamSize: e.target.value })
                      }
                    />
                  </div>
                  <Spacer />
                </Flex>
              ) : null}
              <Flex p={2}>
                <Heading size={"md"} m={2} className="input-labels">
                  Add Faqs{" "}
                </Heading>
              </Flex>
              {faqs.map((faq, index) => {
                return (
                  <React.Fragment key={index}>
                    <Flex p={2}>
                      <FormControl m={2}>
                        <Input
                          name="question"
                          placeholder={"Question"}
                          _placeholder={{
                            opacity: 8,
                            color: "rgba(0,0,0,0.5)",
                          }}
                          id={"faqq" + index}
                          outline="none"
                          color="black"
                          backgroundColor="transparent"
                          borderBottom="5px solid white"
                          value={faq.question}
                          onChange={(event) => handleFqsInput({ index, event })}
                        />
                      </FormControl>
                      <FormControl m={2}>
                        <Input
                          name="answer"
                          placeholder={"Answer"}
                          onChange={(event) => handleFqsInput({ index, event })}
                          id={"faqa" + index}
                          outline="none"
                          color="white"
                          backgroundColor="transparent"
                          borderBottom="5px solid white"
                          value={faq.answer}
                        />
                      </FormControl>
                      <Flex
                        p={[0, 3]}
                        width={"40px"}
                        flexDirection={["column", "row"]}
                      >
                        {index === 0 ? null : (
                          <Button
                            mx={2}
                            my={1}
                            size={"xs"}
                            onClick={() => {
                              const values = [...faqs];
                              values.splice(index, 1);
                              setfaqs(values);
                            }}
                          >
                            <MinusIcon />
                          </Button>
                        )}
                        <Button
                          mx={2}
                          my={1}
                          size={"xs"}
                          onClick={() =>
                            setfaqs([...faqs, { question: "", answer: "" }])
                          }
                        >
                          <AddIcon />
                        </Button>
                      </Flex>
                    </Flex>
                  </React.Fragment>
                );
              })}
              <Button
                className="confirm"
                onClick={async (e) => {
                  e.preventDefault();
                  try {
                    console.log(new Date(event.regEnd).toDateString());
                    await addEventMutation({
                      variables: {
                        data: {
                          name: event.name,
                          description: event.desc,
                          eventTimeFrom: event.evStart ? event.evStart : null,
                          eventTimeTo: event.evEnd ? event.evEnd : null,
                          registrationType: event.participation,
                          platform: event.platform,
                          requirements: event.requirements,
                          vertical: event.vertical,
                          pic: container,
                          finalists: "",
                          firstplace: event.winner_points.toString(),
                          participation: event.participation_points.toString(),
                          secondplace: event.runner_up_points.toString(),
                          thirdplace: event.third_pos_points.toString(),
                          teamSize: parseInt(event.teamSize),
                          registrationCloseTime: event.regEnd
                            ? event.regEnd
                            : null,
                          registrationOpenTime: event.regStart
                            ? event.regStart
                            : null,
                          registrationfee: event.fee.toString(),
                        },
                      },
                    })
                      .then((res) => {
                        if (res.data?.addEvent.id) {
                          faqs.map(async (faq) => {
                            await addfaq({
                              variables: {
                                eventId: res.data?.addEvent.id,
                                data: {
                                  question: faq.question,
                                  answer: faq.answer,
                                },
                              },
                            });
                          });
                        }
                      })
                      .catch((error) => console.log(`error---->${error}`));
                  } catch (error) {
                    console.log(`error--->${error}`);
                  }
                }}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </ChakraProvider>
    </body>
  );
};

export default Add;
