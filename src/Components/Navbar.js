import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import "../App.css";
import { AiOutlineDown } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="container-blur">
      <Box className="navbar-overlay-container">
        <Flex alignItems="center" className="navbar-container">
          <div className="navbar-image-container">
            <Image
              fit="covers"
              width="96px"
              alt="shaastra_logo"
              src={require("./shaastra2.png")}
            />
          </div>
          <div className="navbar-events">
            <Text className="navbar-font">Home</Text>
          </div>
          <div className="navbar-events">
            <Text className="navbar-font">Events</Text>
            <AiOutlineDown color="#FFFFFF" size="1.2rem" />
          </div>
          <div className="navbar-events">
            <Text className="navbar-font">Initiatives</Text>
            <AiOutlineDown color="#FFFFFF" size="1.2rem" />
          </div>
          <div className="navbar-events">
            <Text className="navbar-font">Blitz Chess</Text>
          </div>
          <div className="navbar-events">
            <Text className="navbar-font">Sponsors</Text>
          </div>
          <div className="navbar-events">
            <Text className="navbar-font">Team</Text>
          </div>
          <div className="navbar-hamburger-container">
            <RxHamburgerMenu color="#FFFFFF" size="2rem" />
          </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
