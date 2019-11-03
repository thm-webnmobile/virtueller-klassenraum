import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import 'bootstrap/dist/css/bootstrap.min.css';

const Messages = ({ messages }) => {
    return (
        <ListGroup>
            {messages.flatMap((message, index) => [
                <ListGroupItem key={index}>{message}</ListGroupItem>
            ])}
        </ListGroup>
    );
};

export default Messages;