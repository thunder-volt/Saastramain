import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import cardData from "./cardData";
import CardComponent from "./Card";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import NavBar from "./navigation/NavBar";
import Footer from "./Footer";
import TopBar from "./TopBar";
import { Button, ChakraProvider } from "@chakra-ui/react";

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

function EventsLanding() {
  const [vertical, setVertical] = useState("");

  const { data, error, loading, refetch } = useQuery(GET_EVENTS, {
    variables: {
      filter: "",
    },
  });
  console.log(data?.getEvents.events, vertical);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  if (data) {
    let searchedEvents = data?.getEvents.events.filter((event) =>
      event.name.toLowerCase().includes("BIOGEN".toLowerCase())
    );
    console.log(data);
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
                EVENTS
              </text>
            </svg>

            <div class="explorebutton">
              <button className="explore" oncCick="explore()">
                Explore Events{" "}
              </button>{" "}
            </div>
          </div>
          <div className="glassmorphic2">
            <div>
              <select
                name="Vertical"
                className="select-events"
                onChange={(e) => {
                  setVertical(e.target.value);
                }}
              >
                <option value="AEROFEST">AEROFEST</option>
                <option value="BIOGEN">BIOGEN</option>
                <option value="BEVENTS">BUISNESS EVENTS</option>
                <option value="CL">CODING & LOGIC</option>
                <option value="DB">DESIGN & BUILD</option>
                <option value="ELECFEST">ELECFEST</option>
                <option value="IGNITE">IGNITE</option>
                <option value="STRATEGISTS">STRATEGISTS</option>
                <option value="OTHER">OTHER</option>
              </select>
              <ChakraProvider>
                <Button
                  colorScheme="messenger"
                  ml={3}
                  onClick={(e) => {
                    e.preventDefault();
                    refetch({ filter: vertical });
                  }}
                >
                  Apply
                </Button>
              </ChakraProvider>
            </div>
            <div className="wrapper">
              {data?.getEvents?.events?.map((el) => {
                console.log(el);
                if (el.vertical !== "WORKSHOPS") {
                  return <CardComponent data={el} key={el.id} />;
                }
                return null;
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
  } else <></>;
}

export default EventsLanding;
