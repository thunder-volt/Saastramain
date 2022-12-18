import {Modal,Button} from "react-bootstrap";
import moment from "moment";


function KnowMoreModal(props) {
  var regStart = new Date(props.data?.registrationOpenTime)
  var regEnd = new Date(props.data?.registrationCloseTime)
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.data?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="ws-modal-p">
            {props.data?.description}
          </p>
          <br></br>
          <p><b>Registration Period: </b> {moment(
                    parseInt(props.data?.registrationOpenTime)
                  ).format("MMMM Do YYYY")} - {moment(
                    parseInt(props.data?.registrationCloseTime)
                  ).format("MMMM Do YYYY")}  </p>
          <p><b>Registration Type: </b> {props.data?.registrationType}</p>
          {
            props.data?.registrationType == 'TEAM' && <p><b>Team Size: </b> {props.data?.teamSize} </p>
          }
          <p><b>Registration Fee: </b> {props.data?.registrationFee? props.data?.registrationFee : 'None'}</p>
          <p><b>Event Start Time: </b>{props.data?.eventTimeFrom ? moment(
                    parseInt(props.data?.eventTimeFrom)
                  ).format("MMMM Do YYYY") : 'TBD'}</p>
          <p><b>Event End Time: </b>{props.data?.eventTimeTo ? moment(
                    parseInt(props.data?.eventTimeTo)
                  ).format("MMMM Do YYYY") : 'TBD'}</p>
          <p><b>Venue: </b> {props.data?.platform}</p>
          <p><b>Requirements: </b> {props.data?.requirements}</p>
          <br></br>
          <h4>FAQS</h4>
          {
            props.data?.faqs.map(f => {
              return(
                <p>
                  <b>{f.question}</b>
                  <br></br>
                  {f.answer}
                  <br></br>
                </p>
              )
            })
          }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="close-ws-btn">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default KnowMoreModal;