import * as React from "react";
import { Flex } from "@chakra-ui/react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
// import profile from "../../../images/profile.jpg";
import "../../../styles/Team_styles/Card.css";

interface Props {
  type: string;
  profile: {
    name?: string;
    role?: string;
    desc?: string;
    imgURL?: string;
    social_links: {
      whatsapp?: string;
      linkedIn?: string;
      instagram?: string;
      mailid?: string;
      github?: string;
      contact?: string;
      facebook?: string;
    };
    mailId?: string;
    dept?: string;
  };
}

const Card = (props: Props) => {
  return (
    <div
      className="Card-team"
      style={
        props.type === "all" || props.type === props.profile.dept
          ? { transform: "scale(1)", display: "block" }
          : { transform: "scale(0)", display: "none" }
      }
    >
      <div className="imageBox">
        <img src={props.profile.imgURL} alt="" />
        {/*<div className="profileDescription">
          <FaQuoteLeft />
          <p>{props.profile.desc}</p>
          <FaQuoteRight />
    </div>*/}
      </div>
      <div className="profileCard">
        <div>
          <h2>{props.profile.name}</h2>
          <p>{props.profile.dept}</p>
        </div>
        <Flex
          width="100%"
          fontSize="20px"
          p={3}
          color="#111"
          justifyContent="space-evenly"
        >
          <a target="_blank" href={props.profile.social_links.whatsapp} rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a target="_blank" href={props.profile.social_links.instagram} rel="noreferrer">
            <FaInstagram />
          </a>
          <a target="_blank" href={props.profile.social_links.linkedIn} rel="noreferrer">
            <FaLinkedin />
          </a>
          <a target="_blank" href={props.profile.social_links.mailid} rel="noreferrer">
            <FaEnvelope />
          </a>
        </Flex>
      </div>
    </div>
  );
};

export default Card;
