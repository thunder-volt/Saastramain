import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Flex, Text as Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const DrawerDesktopMenuItems = () => {
  const [menu, setMenu] = useState<string>("e&w");

  const menuItems = () => {
    switch (menu) {
      case "e&w":
        return (
          <>
            <Link
              style={{
                textAlign: "center",
                width: "60%",
                borderRadius: 8,
                padding: 5,
                marginBottom: 5,
                fontSize: 38,
                background: "#00000028",
              }}
              to="/events"
            >
              Events
            </Link>
            <Link
              style={{
                textAlign: "center",
                width: "60%",
                borderRadius: 8,
                padding: 5,
                marginBottom: 5,
                fontSize: 38,
                background: "#00000028",
              }}
              to="/summit"
            >
              Summit
            </Link>
            <Link
              style={{
                textAlign: "center",
                width: "60%",
                borderRadius: 8,
                padding: 5,
                marginBottom: 5,
                fontSize: 38,
                background: "#00000028",
              }}
              to="/tif"
            >
              TiF
            </Link>
            <Link
              style={{
                textAlign: "center",
                width: "60%",
                borderRadius: 8,
                padding: 5,
                marginBottom: 5,
                fontSize: 38,
                background: "#00000028",
              }}
              to="/workshops"
            >
              Workshops
            </Link>
          </>
        );
      case "exhibitions":
        return (
          <>
            <Link
              style={{
                textAlign: "center",
                width: "60%",
                borderRadius: 8,
                padding: 5,
                marginBottom: 5,
                fontSize: 38,
                background: "#00000028",
              }}
              to="/defence-tech"
            >
              Defence Tech
            </Link>
            <Link
              style={{
                textAlign: "center",
                width: "60%",
                borderRadius: 8,
                padding: 5,
                marginBottom: 5,
                fontSize: 38,
                background: "#00000028",
              }}
              to="/exhibitions-speakers"
            >
              Exhibitions Speakers
            </Link>
            <Link
              style={{
                textAlign: "center",
                width: "60%",
                borderRadius: 8,
                padding: 5,
                marginBottom: 5,
                fontSize: 38,
                background: "#00000028",
              }}
              to="/others-exhibitions"
            >
              Others
            </Link>
          </>
        );
      case "shaastra-nights":
        return (
          <>
            <Link
              style={{
                textAlign: "center",
                width: "60%",
                borderRadius: 8,
                padding: 5,
                marginBottom: 5,
                fontSize: 38,
                background: "#00000028",
              }}
              to="/shows"
            >
              Shows
            </Link>
            <Link
              style={{
                textAlign: "center",
                width: "60%",
                borderRadius: 8,
                padding: 5,
                marginBottom: 5,
                fontSize: 38,
                background: "#00000028",
              }}
              to="/envisage"
            >
              Envisage
            </Link>
          </>
        );
      case "schools":
        return (
          <>
            <Link
              style={{
                textAlign: "center",
                width: "60%",
                borderRadius: 8,
                padding: 5,
                marginBottom: 5,
                fontSize: 38,
                background: "#00000028",
              }}
              to="/shaastra-juniors"
            >
              Shaastra Juniors
            </Link>
            <Link
              style={{
                textAlign: "center",
                width: "60%",
                borderRadius: 8,
                padding: 5,
                marginBottom: 5,
                fontSize: 38,
                background: "#00000028",
              }}
              to="/jmt"
            >
              JMT
            </Link>
          </>
        );
      case "click":
        return (
          <Link
            style={{
              textAlign: "center",
              width: "60%",
              borderRadius: 8,
              padding: 5,
              marginBottom: 5,
              fontSize: 38,
              background: "#00000028",
            }}
            to="/workshops"
          >
            Please click to go
          </Link>
        );
      default:
        return (
          <Link
            style={{
              textAlign: "center",
              width: "60%",
              borderRadius: 8,
              padding: 5,
              marginBottom: 5,
              fontSize: 38,
              background: "#00000028",
            }}
            to="/workshops"
          >
            Please hover to see options
          </Link>
        );
    }
  };

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        height="90%"
        flex={1}
      >
        <Box
          className="menu-text"
          _hover={{ background: "#00000050" }}
          onMouseOver={() => setMenu("e&w")}
          fontSize={40}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={12}
          p={3}
          pr={12}
          mb={4}
        >
          Events and Workshops
        </Box>
        <Box
          className="menu-text"
          _hover={{ background: "#00000050" }}
          onMouseOver={() => setMenu("exhibitions")}
          fontSize={40}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={12}
          p={3}
          pr={12}
          mb={4}
        >
          Exhibitions
        </Box>
        <Box
          className="menu-text"
          _hover={{ background: "#00000050" }}
          onMouseOver={() => setMenu("shaastra-nights")}
          fontSize={40}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={12}
          p={3}
          pr={12}
          mb={4}
        >
          Shaastra Nights
        </Box>
        <Box
          className="menu-text"
          _hover={{ background: "#00000050" }}
          onMouseOver={() => setMenu("schools")}
          fontSize={40}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={12}
          p={3}
          pr={12}
          mb={4}
        >
          Schools
        </Box>
        <Box
          className="menu-text"
          _hover={{ background: "#00000050" }}
          onMouseOver={() => setMenu("click")}
          fontSize={40}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={12}
          p={3}
          pr={12}
          mb={4}
        >
          <Link to="/social-endeavours">Social Endeavours</Link>
        </Box>
        <Box
          className="menu-text"
          _hover={{ background: "#00000050" }}
          onMouseOver={() => setMenu("click")}
          fontSize={40}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={12}
          p={3}
          pr={12}
          mb={4}
        >
          <Link to="/speakers">Speakers</Link>
        </Box>
        <Box
          className="menu-text"
          _hover={{ background: "#00000050" }}
          onMouseOver={() => setMenu("click")}
          fontSize={40}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={12}
          p={3}
          pr={12}
          mb={4}
        >
          <Link to="/sponsors">Sponsors</Link>
        </Box>
        <Box
          className="menu-text"
          _hover={{ background: "#00000050" }}
          onMouseOver={() => setMenu("click")}
          fontSize={40}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={12}
          p={3}
          pr={12}
          mb={4}
        >
          <Link to="/team">Team</Link>
        </Box>
      </Flex>
      <Flex
        display={{ base: "none", lg: "flex" }}
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        flex={1}
        height={"auto"}
        className="menu-desc"
      >
        {menuItems()}
      </Flex>
    </>
  );
};

export const DrawerMobileMenuItems = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      height="90%"
      flex={1}
    >
      <Accordion allowToggle>
        <AccordionItem border={0}>
          <AccordionButton pl={0}>
            <Box fontSize={27} fontStyle={"normal"}>
              Events and Workshops
            </Box>
          </AccordionButton>
          <AccordionPanel>
            <Box fontSize="xl">
              <Link to="/events">Events</Link>
            </Box>
            <Box fontSize="xl">
              <Link to="/summit">Summit</Link>
            </Box>
            <Box fontSize="xl">
              <Link to="/tif">TiF</Link>
            </Box>
            <Box fontSize="xl">
              <Link to="/workshops">Workshops</Link>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border={0}>
          <AccordionButton pl={0}>
            <Box fontSize={27} fontStyle={"normal"}>
              Exhibitions
            </Box>
          </AccordionButton>
          <AccordionPanel>
            <Box fontSize="xl">
              <Link to="/defence-tech">Defence Tech</Link>
            </Box>
            <Box fontSize="xl">
              <Link to="/exhibitions-speakers">Exhibitions Speakers</Link>
            </Box>
            <Box fontSize="xl">
              <Link to="/others-exhibitions">Others</Link>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border={0}>
          <AccordionButton pl={0}>
            <Box fontSize={27} fontStyle={"normal"}>
              Shaastra Nights
            </Box>
          </AccordionButton>
          <AccordionPanel>
            <Box fontSize="xl">
              <Link to="/shows">Shows</Link>
            </Box>
            <Box fontSize="xl">
              <Link to="/envisage">Envisage</Link>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border={0}>
          <AccordionButton pl={0}>
            <Box fontSize={27} fontStyle={"normal"}>
              Schools
            </Box>
          </AccordionButton>
          <AccordionPanel>
            <Box fontSize="xl">
              <Link to="/shaastra-juniors">Shaastra Juniors</Link>
            </Box>
            <Box fontSize="xl">
              <Link to="/jmt">JMT</Link>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <Box p={2} pl={0} fontSize={27} fontStyle={"normal"}>
          <Link to="/social-endeavours">Social Endeavours</Link>
        </Box>
        <Box p={2} pl={0} fontSize={27} fontStyle={"normal"}>
          <Link to="/speakers">Speakers</Link>
        </Box>
        <Box p={2} pl={0} fontSize={27} fontStyle={"normal"}>
          <Link to="/sponsors">Sponsors</Link>
        </Box>
        <Box p={2} pl={0} fontSize={27} fontStyle={"normal"}>
          <Link to="/team">Team</Link>
        </Box>
      </Accordion>
    </Flex>
  );
};
