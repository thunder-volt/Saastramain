import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useMutation, gql } from "@apollo/client";

const edit_faq = gql`
  mutation EditEventFAQ($eventFaqid: String!, $data: EditEventFAQInput!) {
    editEventFAQ(EventFAQID: $eventFaqid, data: $data)
  }
`;

const delete_faq = gql`
  mutation DeleteEventFAQ($eventFaqid: String!) {
    deleteEventFAQ(EventFAQID: $eventFaqid)
  }
`;

const add_faq = gql`
  mutation CreateEventFAQ($eventId: String!, $data: CreateEventFAQInput!) {
    createEventFAQ(EventID: $eventId, data: $data)
  }
`;

const EventFaqs = ({ event, refetch }) => {
  const [role, setRole] = useState("");
  const [faqId, setFaqId] = useState("");
  const [uquestion, setQuestion] = useState("");
  const [uanswer, setAnswer] = useState("");
  useEffect(() => {
    if (localStorage.getItem("role")) {
      setRole(localStorage.getItem("role"));
    }
  });
  let faqs = event?.faqs;

  faqs = faqs.filter((faq) => {
    if (faq.question.split("field", 2).length > 1) {
      return false;
    } else return true;
  });
  console.log(faqs);
  const [aquestion, setAQuestion] = useState("");
  const [aanswer, setAAnswer] = useState("");

  const [editFaq] = useMutation(edit_faq);
  const [deleteFaq] = useMutation(delete_faq);
  const [addFaq] = useMutation(add_faq);

  const handleedit = (faqid) => {
    editFaq({
      variables: {
        eventFaqid: faqid,
        data: {
          question: uquestion,
          answer: uanswer,
        },
      },
    })
      .catch((err) => console.log(err))
      .then(async (res) => {
        if (res.data) {
          await refetch({ eventId: event.id });
        }
      })
      .catch((error) => console.log(`error--->${error}`));
    setFaqId("");
    setQuestion("");
    setAnswer("");
  };

  const handleUpdateFaq = (event) => {
    if (event.target.name === "uquestion") {
      setQuestion(event.target.value);
    } else {
      setAnswer(event.target.value);
    }
  };
  const handleAddFaq = (event) => {
    if (event.target.name === "aquestion") {
      setAQuestion(event.target.value);
    } else {
      setAAnswer(event.target.value);
    }
  };

  const handleAdd = () => {
    addFaq({
      variables: {
        eventId: event.id,
        data: {
          question: aquestion,
          answer: aanswer,
        },
      },
    })
      .catch((err) => console.log(err))
      .then(async (res) => {
        if (res.data) {
          await refetch({ eventId: event.id });
        }
      })
      .catch((error) => console.log(`error--->${error}`));
    setAQuestion("");
    setAAnswer("");
  };
  console.log(event);
  const textcolor = "white";
  return (
    <React.Fragment>
      {faqs && faqs.length > 0 ? (
        <Box width={"100%"}>
          <Center textAlign={"center"}>
            <Heading size={"md"} m={4} mt="30px" color={textcolor}>
              FREQUENTLY ASKED QUESTIONS
            </Heading>
          </Center>
          {role === "admin" ? (
            <Flex p={2} flexDirection={["column", "column", "row"]}>
              <FormControl m={2} width={["100%", "100%", "45%"]}>
                <Input
                  name="aquestion"
                  placeholder={"Question"}
                  _placeholder={{ opacity: 8, color: "rgba(0,0,0,0.5)" }}
                  value={aquestion}
                  onChange={(event) => handleAddFaq(event)}
                  fontSize={"small"}
                  p={2}
                  borderColor={"#2467a1"}
                />
              </FormControl>
              <FormControl m={2} width={["100%", "100%", "45%"]}>
                <Input
                  name="aanswer"
                  placeholder={"Answer"}
                  _placeholder={{ opacity: 8, color: "rgba(0,0,0,0.4)" }}
                  value={aanswer}
                  onChange={(event) => handleAddFaq(event)}
                  fontSize={"small"}
                  p={2}
                  borderColor={"#2467a1"}
                />
              </FormControl>
              <Button
                variant="solid"
                border="2px solid"
                borderColor="#2467a1"
                m={2}
                p={2}
                color={"black"}
                onClick={() => handleAdd()}
              >
                Add FAQ
              </Button>
            </Flex>
          ) : null}

          <Flex flexDirection={"column"} width={"100%"} color={"black"}>
            {faqs?.map((faq) => {
              return (
                <Box m={2} key={faq.id} paddingBottom={10}>
                  <Flex>
                    <Box
                      p={3}
                      shadow="lg"
                      borderTopWidth="2px"
                      borderLeftWidth={"2px"}
                      borderRightWidth={"2px"}
                      width={"100%"}
                      borderTopRadius={"lg"}
                    >
                      <Text
                        fontWeight={"extrabold"}
                        color={"rgba(0,0,0,0.5)"}
                        textAlign={"left"}
                      >
                        {faq.question}
                      </Text>
                      {faqId === faq.id ? (
                        <FormControl m={3}>
                          <Input
                            onChange={handleUpdateFaq}
                            name="uquestion"
                            value={uquestion}
                            borderColor={"black"}
                            placeholder="Question"
                            color={"black"}
                          />
                        </FormControl>
                      ) : null}
                    </Box>
                  </Flex>
                  <Flex>
                    <Box
                      p={3}
                      shadow="lg"
                      borderWidth="2px"
                      borderBottomRadius={"lg"}
                      width={"100%"}
                    >
                      <Text
                        fontWeight={"semibold"}
                        color={"rgba(0,0,0,0.5)"}
                        textAlign={"left"}
                      >
                        {faq.answer}
                      </Text>
                      {faqId === faq.id ? (
                        <FormControl m={3}>
                          <Input
                            onChange={(event) => handleUpdateFaq(event)}
                            name="uanswer"
                            value={uanswer}
                            borderColor={"#2467a1"}
                            placeholder="Answer"
                            color={"black"}
                          />
                        </FormControl>
                      ) : null}

                      {faqId === faq.id ? (
                        <Box>
                          <Button
                            color={"#2467a1"}
                            variant="solid"
                            border="2px solid"
                            borderColor="#2467a1"
                            size="sm"
                            p={2}
                            m={2}
                            onClick={() => handleedit(faq.id)}
                            float={"right"}
                          >
                            Edit FAQ
                          </Button>
                        </Box>
                      ) : role === "admin" ? (
                        <Box>
                          <Button
                            color={"#2467a1"}
                            variant="outline"
                            border="2px solid"
                            borderColor="#2467a1"
                            size="sm"
                            p={2}
                            m={2}
                            onClick={() => {
                              setFaqId(faq.id);
                            }}
                            float={"right"}
                          >
                            <AiFillEdit size="1.3rem" />
                            Edit FAQ
                          </Button>
                          <Button
                            color={"#2467a1"}
                            variant="outline"
                            border="2px solid"
                            borderColor="#2467a1"
                            size="sm"
                            p={2}
                            m={2}
                            onClick={() => {
                              deleteFaq({
                                variables: {
                                  eventFaqid: faq.id,
                                },
                              })
                                .then(async (res) => {
                                  if (res.data) {
                                    await refetch({ eventId: event.id });
                                  }
                                })
                                .catch((error) =>
                                  console.log(`error--->${error}`)
                                );
                            }}
                            float={"right"}
                          >
                            <AiFillDelete size="1.3rem" />
                            Delete FAQ
                          </Button>
                        </Box>
                      ) : null}
                    </Box>
                  </Flex>
                </Box>
              );
            })}
          </Flex>
        </Box>
      ) : (
        <React.Fragment>
          {role === "admin" ? (
            <Container maxWidth={"5xl"}>
              <Center m={2} p={2}>
                <Heading>Add FAQs</Heading>
              </Center>
              <Flex>
                <FormControl m={2} width={"45%"}>
                  <Input
                    name="aquestion"
                    placeholder={"Question"}
                    value={aquestion}
                    onChange={(event) => handleAddFaq(event)}
                    fontSize={"small"}
                    p={2}
                    borderColor={"#2467a1"}
                  />
                </FormControl>
                <FormControl m={2} width={"45%"}>
                  <Input
                    name="aanswer"
                    placeholder={"Answer"}
                    value={aanswer}
                    onChange={(event) => handleAddFaq(event)}
                    fontSize={"small"}
                    p={2}
                    borderColor={"#2467a1"}
                  />
                </FormControl>
                <Button
                  color={"#2467a1"}
                  variant="solid"
                  border="2px solid"
                  borderColor="#2467a1"
                  size="sm"
                  p={2}
                  m={3}
                  onClick={() => handleAdd()}
                >
                  Add FAQ
                </Button>
              </Flex>
            </Container>
          ) : null}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EventFaqs;
