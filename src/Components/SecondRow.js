import React, { useState } from "react";
import {
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
} from "@chakra-ui/react";
import "../App.css";
import { CiFilter } from "react-icons/ci";
import { AiOutlinePlus, AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

const LOGOUT = gql`
  mutation Mutation {
    logoutUser
  }
`;

const SecondRow = ({
  eorw,
  seteorw,
  refetch,
  buttonText,
  setButtonText,
  subbuttonText,
  setsubButtonText,
}) => {
  var { isOpen, onOpen, onClose } = useDisclosure();
  // const [filter, setFilter]= useState('Events');
  const [value, setValue] = useState("Events");
  // const [subbuttonText, setsubButtonText] = useState("Events");
  const navigate = useNavigate();
  const [logout] = useMutation(LOGOUT);
  const handleAdd = () => navigate("/admin/addevent");
  const handleClose = async (e) => {
    e.preventDefault();
    console.log(value);
    if (value === "Workshops") {
      await refetch({ filter: "WORKSHOPS" })
        .then(() => onClose())
        .then(() => setButtonText("Apply Filter"));
    }
    if (value === "Events") {
      await refetch({ filter: "" }).then(() => onClose());
    }
  };

  return (
    <Flex className="second-row">
      <button className="third-row-buttons" onClick={onOpen}>
        <HStack alignItems="center" className="events-workshops-filter">
          <CiFilter color="#FFFFFF" size="2rem" />
          <Text className="main-filter-text">{subbuttonText}</Text>
        </HStack>
      </button>
      <Spacer />
      <button onClick={handleAdd} className="third-row-buttons">
        <HStack alignItems="center" className="add-event-container">
          <AiOutlinePlus color="#000000" size="2rem" />
          <Text className="add-event">Add Event</Text>
        </HStack>
      </button>
      <Spacer />
      <button
        onClick={async (e) => {
          e.preventDefault();
          await logout().then(navigate("/"));
        }}
      >
        <HStack className="sub-filter">
          <AiOutlineLogout color="#FFFFFF" size="2rem" />
          <Text className="main-filter-text">Logout</Text>
        </HStack>
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Filter</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="row">
                <Radio value="Events">Events</Radio>
                <Radio value="Workshops">Workshops</Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={(e) => {
                seteorw(value);
                setsubButtonText(value);
                handleClose(e);
              }}
            >
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default SecondRow;
