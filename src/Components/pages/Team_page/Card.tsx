import * as React from "react";
import { Flex } from "@chakra-ui/react";
import {
  FaGithub,
  FaTwitter,
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
      twitter?: string;
      linkedIn?: string;
      instagram?: string;
      shastraMailId?: string;
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
      className="Card"
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
          <a target="_blank" href={props.profile.social_links.twitter}>
            <FaTwitter />
          </a>
          <a target="_blank" href={props.profile.social_links.linkedIn}>
            <FaLinkedin />
          </a>
          <a target="_blank" href={props.profile.social_links.github}>
            <FaGithub />
          </a>
          <a target="_blank" href={props.profile.social_links.shastraMailId}>
            <FaEnvelope />
          </a>
        </Flex>
      </div>
    </div>
  );
};

export default Card;
