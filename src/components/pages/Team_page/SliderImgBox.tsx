import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../../../styles/Team_styles/SliderImgBox.css";

// import profileIMG from "../../../images/profile.jpg";

interface Props {
  profile: {
    id?: number;
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

const SliderImgBox = (props: Props) => {
  return (
    <div className="sliderImgBox">
      <div className="profileCard">
        <div className="profileCard_header">
          <div>
            <h2>{props.profile?.name}</h2>
            <p>{props.profile?.role}</p>
            <p>{props.profile?.dept}</p>
          </div>
        </div>
          {/* <Flex
            width="100px"
            fontSize="20px"
            color="rgba(255,255,255)"
            justifyContent="space-evenly"
          >
            <a href={props.profile.social_links.whatsapp}>
              <FaTwitter />
            </a>
            <a href={props.profile.social_links.linkedIn}>
              <FaLinkedin />
            </a>
            <a href={props.profile.social_links.instagram}>
              <FaGithub />
            </a>
            <a href={props.profile.social_links.mailid}>
              <FaEnvelope />
            </a>
          </Flex> */}
        {/*<div className="profileDescription">{props.profile.desc}</div>*/}
      </div>
      <div className="imgCover">
        <img key={props.profile?.id} src={props.profile?.imgURL} alt={props.profile?.imgURL} />
      </div>
    </div>
  );
};

export default SliderImgBox;
