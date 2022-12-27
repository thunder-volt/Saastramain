import React from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import "../App.css";
import { AiOutlineSearch } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";

const ThirdRow = ({ search, setSearch }) => {
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
    </Box>
  );
};

export default ThirdRow;
