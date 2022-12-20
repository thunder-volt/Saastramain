import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import cardData from "./cardData";
import CardComponent from "./Card.jsx";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

import NavBar from "./navigation/NavBar";
import Footer from "./Footer";

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
        <NavBar />
        <div className="workshops-landing">
          <h1 className="wstitle">WORKSHOPS</h1>

          <div>
            <button className="explore" oncCick="explore()">
              Explore Workshops{" "}
            </button>{" "}
          </div>
        </div>
        <div className="glassmorphic2">
          <div className="wrapper">
            {data?.getEvents?.events.map((el) => {
              console.log(el);
              return <CardComponent data={el} key={el.id} />;
            })}
          </div>
        </div>
        <Footer />
      </body>
    );
  } else {
    return <p>Loading</p>;
  }
}

export default WorkshopsLanding;
