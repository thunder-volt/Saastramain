
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import cardData from "./cardData";
import CardComponent from "./Card.jsx";
import { useState } from "react";
import { useQuery } from "@chakra-ui/react";
import { gql } from "@apollo/client";

import NavBar from "./navigation/NavBar";
import Footer from "./Footer";

const EVENTS = gql`
  query getEvents($vertical: Vertical, $skip: number, $take: number){
    getEvents(vertical: $vertical, skip: $skip, take: $take){
      events,
      count
    }
  }
`;

async function WorkshopsLanding() {

  const {data, loading, error} = useQuery(EVENTS)


  return (
    <body>
      <NavBar />
    <div className="workshops-landing">
      <h1 className="wstitle">WORKSHOPS</h1>
      
      <div>
        <button className="explore" oncCick="explore()">Explore Workshops </button>{" "}
      </div>
      </div>
      <div className="glassmorphic2">
        <div className="wrapper">
        {
          data?.events.map((data) => {
            console.log(data)
            return <CardComponent data={data} key={data.id} />;
          })
        }
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default WorkshopsLanding;
