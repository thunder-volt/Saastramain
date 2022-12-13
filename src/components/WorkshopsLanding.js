
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import cardData from "./cardData";
import CardComponent from "./Card";

function WorkshopsLanding() {
  let cardElements = cardData.map((data) => {
    return <CardComponent data={data} key={data.id} />;
  });

  return (
    <>
    <div className="workshops-landing">
      <h1 className="title">WORKSHOPS</h1>
      
      <div>
        <button className="explore" onclick="explore()">Explore Workshops </button>{" "}
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

export default WorkshopsLanding;
