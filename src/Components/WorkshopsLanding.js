import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import cardData from "./cardData";
import CardComponent from "./Card.jsx";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { Spacer, HStack } from "@chakra-ui/react";

import NavBar from "./navigation/NavBar";
import Footer from "./Footer";
import TopBar from "./TopBar";
import Combo1 from "./Combo1";
import Combo2 from "./Combo2";
import Combo3 from "./Combo3";

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

function WorkshopsLanding() {
  const { data, error, loading } = useQuery(GET_EVENTS, {
    variables: {
      filter: "WORKSHOPS",
    },
  });

  // console.log(data?.getEvents.events);

  if (loading) return <p>Loading</p>;
  if (error) return <pre>{error.message}</pre>;

  if (data) {
    return (
      <body>
        <TopBar />
        <NavBar />
        <div>
          <div className="workshops-landing">
            <svg class="signup-heading">
              <text
                x="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                y="50%"
              >
                WORKSHOPS
              </text>
            </svg>
            <div className="offers">
              <Combo1 events={data?.getEvents?.events} />
              <Spacer />
              <Combo2 events={data?.getEvents?.events} />
              <Spacer />
              <Combo3 events={data?.getEvents?.events} />
            </div>
            <div class="explorebutton">
              <button
                className="explore"
                onClick={() =>
                  document
                    .getElementById("list")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Workshops{" "}
              </button>{" "}
            </div>
            <div className="firework"></div>
            <div className="firework-new"></div>
            <div className="firework-r"></div>
            <div className="firework-new-r"></div>
            <div className="firework-mid"></div>
          </div>
          <div className="glassmorphic2" id="list">
            <div className="wrapper">
              {data?.getEvents?.events?.map((el) => {
                console.log(el);
                return <CardComponent data={el} key={el.id} />;
              })}
            </div>
          </div>
        </div>
        <Footer
          designed={[
            { name: "Jyotsna", mail: "mailto:ed21b031@smail.iitm.ac.in " },
          ]}
        />
      </body>
    );
  } else {
    return <p>Loading</p>;
  }
}

export default WorkshopsLanding;
