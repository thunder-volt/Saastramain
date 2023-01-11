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
} from "@chakra-ui/react";
import "../App.css";
import { AiOutlineSearch } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";

const ThirdRow = ({
  search,
  setSearch,
  filter,
  setFilter,
  refetch,
  buttonText,
  setButtonText,
  subbuttonText,
  setsubButtonText,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState("");

  const handleClose = async (e) => {
    e.preventDefault();
    console.log(value);
    await refetch({ filter: value }).then(() => onClose());
  };

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
          <CiFilter color="#FFFFFF" size="2rem" />
          <Text className="main-filter-text">{buttonText}</Text>
        </HStack>
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Filter</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="column">
                <Radio value="">None</Radio>
                <Radio value="AEROFEST">AeroFest</Radio>
                <Radio value="BIOGEN">Biogen</Radio>
                <Radio value="BEVENTS">BEvents</Radio>
                <Radio value="CL">Coding & Logic</Radio>
                <Radio value="DB">Design & Build</Radio>
                <Radio value="ELECFEST">ElecFest</Radio>
                <Radio value="IGNITE">Ignite</Radio>
                <Radio value="HACKATHONS">Hackathons</Radio>
                <Radio value="STRATEGISTS">Strategists</Radio>
                <Radio value="OTHERS">Others</Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={(e) => {
                setFilter(value);
                if (!value) {
                  setButtonText("Add Filter");
                } else {
                  setButtonText(value);
                }
                setFilter(true);
                handleClose(e);
              }}
            >
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ThirdRow;
