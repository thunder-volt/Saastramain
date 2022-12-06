import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {useState } from "react";
import KnowMoreModal from "./Modal";
import "../App.css";
import nextImage from "../assets/next.png";

function CardComponent(props){
   let [triggerModal,setTriggerModal] = useState(false);

    return(
        <>
        <Card style={{ maxWidth: '30rem' }}>
        <Card.Img variant="top" src={props.data.img} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>
      {props.data.desc}
          </Card.Text>
          <div className="cardButtonsContainer">
          <Button className="cardKnowMoreButton" onClick={()=>setTriggerModal(true)}>Know more
          <span><img className="nextIcon" src={nextImage} alt="" srcset="" /></span>
          </Button>
          <Button className="register" >Register</Button> 
          </div>
        </Card.Body>
      </Card>
      <div className="modal">
      <KnowMoreModal 
              show={triggerModal}
              onHide={() => setTriggerModal(false)}
              /></div>
      </>
    )
}

export default CardComponent;