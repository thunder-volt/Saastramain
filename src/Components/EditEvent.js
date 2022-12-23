import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import {
  Button,
  ChakraProvider,
  Flex,
  Spacer,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { gql, useQuery, useMutation } from "@apollo/client";
import aws from "aws-sdk";
import EditFaqs from "./EditFaqs";
import { useNavigate } from "react-router-dom";

const s3 = new aws.S3({
  endpoint: "https://sfo3.digitaloceanspaces.com/",
  accessKeyId: "DO009DR9PPMJJQXKRN2R", // Access key pair. You can create access key pairs using the control panel or API.
  secretAccessKey: "Zn6p96YD6E7Xa9F7mRdaw6p+Cx6sSYHDpYzXKNL0c+Q",
});

const GET_EVENT = gql`
  query GetEvent($eventId: String!) {
    getEvent(EventID: $eventId) {
      id
      description
      eventTimeFrom
      eventTimeTo
      faqs {
        id
        answer
        question
      }
      firstplace
      name
      participation
      pic
      platform
      registrationCloseTime
      registrationOpenTime
      registrationfee
      requirements
      secondplace
      teamSize
      thirdplace
      vertical
    }
  }
`;

const EDIT_EVENT = gql`
  mutation EditEvent($eventId: String!, $data: EditEventInput!) {
    editEvent(eventID: $eventId, data: $data)
  }
`;

const Edit = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(require("./cardimg.png"));
  const [initial, setInitial] = useState(true);
  const { data, error, loading, refetch } = useQuery(GET_EVENT, {
    variables: {
      eventId: id,
    },
  });

  // const [faqs, setfaqs] = useState([{ question: "", answer: "" }]);
  var { isOpen, onOpen, onClose } = useDisclosure();
  // const navigate = useNavigate();
  const [container, setContainer] = useState("");
  const [editevent, { data: isData, loading: isLoading, error: isError }] =
    useMutation(EDIT_EVENT);
  const [event, setEvent] = useState({
    name: data ? data.getEvent.name : "",
    teamSize: data ? data.getEvent.teamSize : 1,
    desc: data ? data.getEvent.description : "",
    regStart: "",
    regEnd: "",
    evStart: "",
    evEnd: "",
    fee: data ? parseInt(data.getEvent.registrationfee) : 0,
    vertical: data ? data.getEvent.vertical : "",
    participation: data ? parseInt(data.getEvent.registrationType) : 0,
    platform: data ? data.getEvent.platform : "",
    participation_points: data ? parseInt(data.getEvent.participation) : 0,
    winner_points: data ? parseInt(data.getEvent.firstplace) : 0,
    runner_up_points: data ? parseInt(data.getEvent.secondplace) : 0,
    third_pos_points: data ? parseInt(data.getEvent.thirdplace) : 0,
    requirements: data ? data.getEvent.requirements : "",
  });
  console.log(data);
  console.log(event);

  useEffect(() => {
    setEvent({
      name: data ? data.getEvent.name : "",
      teamSize: data ? data.getEvent.teamSize : 1,
      desc: data ? data.getEvent.description : "",
      regStart: "",
      regEnd: "",
      evStart: "",
      evEnd: "",
      fee: data ? parseInt(data.getEvent.registrationfee) : 0,
      vertical: data ? data.getEvent.vertical : "",
      participation: data ? parseInt(data.getEvent.registrationType) : 0,
      platform: data ? data.getEvent.platform : "",
      participation_points: data ? parseInt(data.getEvent.participation) : 0,
      winner_points: data ? parseInt(data.getEvent.firstplace) : 0,
      runner_up_points: data ? parseInt(data.getEvent.secondplace) : 0,
      third_pos_points: data ? parseInt(data.getEvent.thirdplace) : 0,
      requirements: data ? data.getEvent.requirements : "",
    });
  }, [data]);

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

  if (isData) {
    onClose = () => {
      navigate("/admin");
    };
    return (
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent backgroundColor="#addfd0" color="black">
            <ModalHeader>Event Edited</ModalHeader>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }

  if (data !== undefined) {
    return (
      <body className="edit-page-main-container_new">
        <ChakraProvider>
          <div className="edit-page-main-container">
            <div className="heading">Edit Event</div>
            {/* <div className="input-labels">{id}</div> */}
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
                    <img src={data.getEvent.pic} width="90%" alt="profile" />
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
                          Permissions: "Public",
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
                      placeholder={data.getEvent.name}
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
                    onChange={(e) =>
                      setEvent({ ...event, desc: e.target.value })
                    }
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
                      Registration Start(re-enter)
                    </label>
                    <br />
                    <input
                      type="date"
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
                      Registration End(re-enter)
                    </label>
                    <br />
                    <input
                      type="date"
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
                      Event Start(re-enter)
                    </label>
                    <br />
                    <input
                      type="date"
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
                      Event End(re-enter)
                    </label>
                    <br />
                    <input
                      type="date"
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
                <EditFaqs event={data.getEvent} refetch={refetch} />
                <Button
                  className="confirm"
                  onClick={async (e) => {
                    e.preventDefault();
                    try {
                      // console.log(Date.parse(data.getEvent.eventTimeto));
                      // console.log(event);
                      await editevent({
                        variables: {
                          eventId: id,
                          data: {
                            name: event.name ? event.name : data.getEvent.name,
                            description: event.desc
                              ? event.desc
                              : data.getEvent.description,
                            eventTimeFrom: event.evStart
                              ? new Date(event.evStart).toDateString()
                              : Date.parse(data.getEvent.eventTimeFrom),
                            eventTimeTo: event.evEnd
                              ? new Date(event.evEnd).toDateString()
                              : data.getEvent.eventTimeTo,
                            registrationType: event.participation
                              ? event.participation
                              : data.getEvent.registrationType,
                            platform: event.platform
                              ? event.platform
                              : data.getEvent.platform,
                            requirements: event.requirements
                              ? event.requirements
                              : data.getEvent.requirements,
                            vertical: event.vertical
                              ? event.vertical
                              : data.getEvent.vertical,
                            pic: container,
                            finalists: data.getEvent.finalists,
                            firstplace: event.winner_points
                              ? event.winner_points.toString()
                              : data.getEvent.firstplace,
                            participation: event.participation_points
                              ? event.participation_points.toString()
                              : data.getEvent.secondPlace,
                            secondplace: event.runner_up_points
                              ? event.runner_up_points.toString()
                              : data.getEvent.secondplace,
                            thirdplace: event.third_pos_points
                              ? event.third_pos_points.toString()
                              : data.getEvent.thirdplace,
                            teamSize: event.teamSize
                              ? parseInt(event.teamSize)
                              : data.getEvent.teamSize,
                            registrationCloseTime: event.regEnd
                              ? new Date(event.regEnd).toDateString()
                              : data.getEvent.registrationCloseTime,
                            registrationOpenTime: event.regStart
                              ? new Date(event.regStart).toDateString()
                              : data.getEvent.registrationOpenTime,
                            registrationfee: event.fee
                              ? event.fee.toString()
                              : data.getEvent.registrationfee,
                          },
                        },
                      })
                        .then((res) => console.log(res.data))
                        .catch((error) => console.log(`error--->${error}`));
                    } catch (error) {
                      console.log(`error-->${error}`);
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
  }
};

export default Edit;
