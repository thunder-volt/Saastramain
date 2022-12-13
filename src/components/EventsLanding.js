
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import cardData from "./cardData";
import CardComponent from "./Card";

function EventsLanding() {
  let cardElements = cardData.map((data) => {
    return <CardComponent data={data} key={data.id} />;
  });

  return (
    <>
    <div className="workshops-landing">
      <h1 className="title">EVENTS</h1>
      
      <div>
        <button className="explore" onClick="explore()">Explore Events </button>{" "}
      </div>
      </div>
      <div className="glassmorphic2">
        <div className="wrapper">
        {cardElements}
        </div>
      </div>
    </>
  );
}

export default EventsLanding;
