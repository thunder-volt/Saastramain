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
          <p><b>Registration Fee: </b> {props.data?.registrationfee? props.data?.registrationfee : 'None'}</p>
          <p><b>Event Date: </b>{props.data?.eventTimeFrom ? 
          moment(parseInt(props.data?.eventTimeFrom)).format().replace('T', ' ').slice(0,19).split(' ')[0]
          : 'TBD'}</p>
          <p><b>Event Timings: </b>{props.data?.eventTimeFrom ? 
          moment(parseInt(props.data?.eventTimeFrom)).format().replace('T', ' ').slice(0,19).split(' ')[1]
          : 'TBD'} - {props.data?.eventTimeTo ? 
            moment(parseInt(props.data?.eventTimeTo)).format().replace('T', ' ').slice(0,19).split(' ')[1] 
            : 'TBD'} IST</p>
          <p><b>Venue/Platform: </b> {props.data?.platform}</p>
          <p><b>Requirements: </b> {props.data?.requirements}</p>
          <br></br>
         {
          props.data?.faqs &&  <h4>FAQS</h4>
         }
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