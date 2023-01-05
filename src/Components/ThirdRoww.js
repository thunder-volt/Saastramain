import React, { useState } from "react";
import {
  Box,
  HStack,
  Text,
  Flex,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Select,
} from "@chakra-ui/react";
import "../App.css";
import { AiOutlineSearch, AiOutlineDownload } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_EVENTS = gql`
  query GetEvents($filter: String) {
    getEvents(filter: $filter) {
      events {
        name
        id
        description
        vertical
        pic
        registrationOpenTime
        registrationCloseTime
        eventTimeFrom
        eventTimeTo
        registrationType
        registrationfee
        teamSize
        requirements
        platform
        faqs {
          id
          answer
          question
        }
      }
    }
  }
`;

const getcsv = gql`
  query Query($eventId: String!) {
    exportCSV(EventID: $eventId)
  }
`;

const ThirdRow = ({ search, setSearch }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState("");
  // const [filter, setFilter] = useState("");
  const { data, error, loading } = useQuery(GET_EVENTS, {
    variables: {
      filter: "WORKSHOPS",
    },
  });
  const {
    data: csvdata,
    loading: csvloading,
    error: csverror,
    refetch,
  } = useQuery(getcsv, {
    variables: {
      eventId: "",
    },
  });

  const downloadCsv = (str, id) => {
    // document.write(data?.getCSV);
    var downloadElement = document.createElement("a");
    downloadElement.href = "data:text/csv;charset=utf-8," + encodeURI(str);
    downloadElement.target = "_blank";
    downloadElement.download = `${id}.csv`;
    downloadElement.click();
  };

  if (loading) return <p>Loading</p>;
  if (error) return <pre>{error.message}</pre>;

  if (data) {
    return (
      <Box className="third-row">
        <Flex className="search-container">
          <AiOutlineSearch size="2rem" />
          <input
            type="text"
            id="search"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Spacer />
        </Flex>
        <button onClick={onOpen}>
          <HStack className="sub-filter">
            <AiOutlineDownload color="#FFFFFF" size="2rem" />
            <Text className="main-filter-text">Get Data</Text>
          </HStack>
        </button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Choose Workshop</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Select
                placeholder="Select option"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                marginBottom={4}
              >
                {data?.getEvents?.events.map((event, index) => {
                  return (
                    <option value={event.id} key={index}>
                      {event.name}
                    </option>
                  );
                })}
              </Select>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={async (e) => {
                  console.log(value);
                  await refetch({ eventId: value }).then((res) => {
                    downloadCsv(res?.data?.exportCSV, value);
                  });
                }}
              >
                Apply
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    );
  }
};

export default ThirdRow;
