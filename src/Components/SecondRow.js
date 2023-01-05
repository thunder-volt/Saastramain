import React, { useState } from "react";
import { HStack, Text, Flex, Spacer } from "@chakra-ui/react";
import "../App.css";
import { AiOutlinePlus, AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { BsArrowBarRight } from "react-icons/bs";

const LOGOUT = gql`
  mutation Mutation {
    logoutUser
  }
`;

const SecondRow = () => {
  const navigate = useNavigate();
  const [logout] = useMutation(LOGOUT);
  const handleAdd = () => {
    // setFilter(false);
    navigate("/admin/addevent");
  };
  const handleVisit = () => {
    navigate("/admin/workshops");
  };

  return (
    <Flex className="second-row">
      <button className="third-row-buttons" onClick={() => handleVisit()}>
        <HStack alignItems="center" className="events-workshops-filter">
          <BsArrowBarRight color="#FFFFFF" size="2rem" />
          <Text className="main-filter-text">Workshops</Text>
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
          localStorage.clear();
          await logout().then(navigate("/"));
        }}
      >
        <HStack className="sub-filter">
          <AiOutlineLogout color="#FFFFFF" size="2rem" />
          <Text className="main-filter-text">Logout</Text>
        </HStack>
      </button>
    </Flex>
  );
};

export default SecondRow;
