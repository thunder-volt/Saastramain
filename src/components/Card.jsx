import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import {useState } from "react";
import KnowMoreModal from "./Modal";
import "../App.css";
import nextImage from "../assets/next.png";
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';

const REGISTER = gql`
  mutation register($id: string, $referral: string){
    register(id: $id, referral: $referral)
  }
`

function CardComponent(props){
   let [triggerModal,setTriggerModal] = useState(false);

   const [register, {data, loading, error}] = useMutation(REGISTER)

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
          <Button className="register" onClick={async () => {
            if (data.registrationType == 'INDIVIDUAL'){
             await register({
              variables: {
                id: data.id
              }
             }) 
            }
          }} >Register</Button> 
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