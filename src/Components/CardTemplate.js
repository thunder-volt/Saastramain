import React from "react";
import { Image, Text, Button, Flex, Spacer, Box } from "@chakra-ui/react";
import "../App.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

const DELETE_EVENT = gql`
  mutation DeleteEvent($deleteEventId: String!) {
    deleteEvent(id: $deleteEventId)
  }
`;

const CardTemplate = ({
  name,
  index,
  events,
  setEvents,
  desc,
  id,
  pic,
  refetch,
  filter,
  setFiltered,
}) => {
  const [deleteEvent] = useMutation(DELETE_EVENT);
  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteEvent({
      variables: { deleteEventId: id },
    })
      .then(async (res) => {
        console.log(res.data.deleteEvent);
        if (res.data.deleteEvent) {
          await refetch({
            filter: "",
          });
        }
      })
      .then((res) => console.log(res));
  };
  const navigate = useNavigate();

  return (
    <div className="events-card">
      <div className="events-card-header">
        <Text className="events-card-heading-text">{name}</Text>
      </div>
      <div className="events-card-body">
        <Image width="100%" alt="event_img" objectFit="contain" src={pic} />
        <div className="text-conatiner-events">
          <Text className="events-card-body-text">{desc}</Text>
        </div>
      </div>
      <Flex className="events-card-footer">
        <Spacer />
        <Box>
          <Button
            onClick={() => {
              navigate(`/admin/edit/${id}`);
            }}
          >
            <AiFillEdit size="1.3rem" />
            <Text className="button-text">Edit</Text>
          </Button>
        </Box>
        <Spacer />
        <Box>
          <Button onClick={handleDelete}>
            <AiFillDelete size="1.3rem" />
            <Text className="button-text">Delete</Text>
          </Button>
        </Box>
        <Spacer />
      </Flex>
    </div>
  );
};

export default CardTemplate;
