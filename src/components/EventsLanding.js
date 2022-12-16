
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import cardData from "./cardData";
import CardComponent from "./Card";
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
`
  
function EventsLanding() {

  const [vertical, setVertical] = useState()

  const {data, loading, error} = useQuery(EVENTS)


  return (
    <body>
    <NavBar />
    <div className="workshops-landing">
      <h1 className="wstitle">EVENTS</h1>
      
      <div>
        <button className="explore" oncCick="explore()">Explore Events </button>{" "}
      </div>
      </div>
      <div className="glassmorphic2">
        <select name="Vertical" className="select-events" onChange={(e) => setVertical(e.target.value)}>
          <option value="AEROFEST">AEROFEST</option>
          <option value="BIOGEN">BIOGEN</option>
          <option value="BEVENTS">BUISNESS EVENTS</option>
          <option value="CL">CODING & LOGIC</option>
          <option value="DB">DB</option>
          <option value="IGNITE">IGNITE</option>
          <option value="STRATEGISTS">STRATEGISTS</option>
          <option value="WORKSHOPS">WORKSHOPS</option>
          <option value="OTHER">OTHER</option>
        </select>
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

export default EventsLanding;
