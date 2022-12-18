
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import cardData from "./cardData";
import CardComponent from "./Card";
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
        pic,
        registrationOpenTime,
        registrationCloseTime,
        eventTimeFrom,
        eventTimeTo,
        registrationType,
        registrationfee,
        teamSize,
        requirements,
        platform,
        faqs {
        id
        answer
        question
      }
      }
    }
  }
`
  
function EventsLanding() {

  const [vertical, setVertical] = useState("")

  const { data, error, loading, refetch } = useQuery(GET_EVENTS, {
    variables: {
      filter: '',
    },
  });
  console.log(data?.events, vertical)

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  if (data){
    let searchedEvents = data?.getEvents.events.filter((event) =>
    event.name.toLowerCase().includes('BIOGEN'.toLowerCase())
  );
  console.log(data)
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
        <select name="Vertical" className="select-events" onChange={(e) => {
          setVertical(e.target.value)
          refetch({filter: vertical})
        }}>
          <option value="AEROFEST">AEROFEST</option>
          <option value="BIOGEN">BIOGEN</option>
          <option value="BEVENTS">BUISNESS EVENTS</option>
          <option value="CL">CODING & LOGIC</option>
          <option value="DB">DESIGN & BUILD</option>
          <option value="IGNITE">IGNITE</option>
          <option value="STRATEGISTS">STRATEGISTS</option>
          <option value="WORKSHOPS">WORKSHOPS</option>
          <option value="OTHER">OTHER</option>
        </select>
        <div className="wrapper">
        {
          data?.getEvents?.events?.map((el) => {
            console.log(el)
            return <CardComponent data={el} key={el.id} />;
          })
        }
        </div>
      </div>
      <Footer />
    </body>
  );
  }else <></>
}

export default EventsLanding;
