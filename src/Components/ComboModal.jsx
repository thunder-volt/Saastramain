import {Modal,Button} from "react-bootstrap";
import moment from "moment-timezone";

function ComboModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Available Workshops List
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.data.map((event, index)=> {
                    return (
                        <div key={index}>
                            {index+1}. <strong>{event.name}</strong> &nbsp; Date:{event.eventTimeFrom ? 
          moment(parseInt(event.eventTimeFrom)).clone().tz("Europe/London").format().replace('T', ' ').slice(0,19).split(' ')[0]
          : 'TBD'} &nbsp; Timings:  {event.eventTimeFrom ? 
          moment(parseInt(event.eventTimeFrom)).clone().tz("Europe/London").format().replace('T', ' ').slice(0,19).split(' ')[1]
          : 'TBD'} - {event.eventTimeTo ? 
            moment(parseInt(event.eventTimeTo)).clone().tz("Europe/London").format().replace('T', ' ').slice(0,19).split(' ')[1] 
            : 'TBD'} IST
                        </div>
                    )
                })}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className="close-ws-btn">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ComboModal;