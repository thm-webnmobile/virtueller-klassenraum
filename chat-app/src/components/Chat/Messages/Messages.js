import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import 'bootstrap/dist/css/bootstrap.min.css';

const Messages = ({ messages }) => {
    return (
        <div class="messages">
            {messages.flatMap((message, index) => [
                <div class="message" key={index}>
                    <div class="message-avatar">
                        <div class="avatar"><span class="avatar-title">?</span></div>
                        <div>
                            <div class="name"><b>Lorem ipsum</b></div>
                            <div class="time"><i>00:00</i></div>
                        </div>
                    </div>
                    <div class="message-content">
                        {message}
                    </div>
                </div>
            ])}
        </div>
    );
};

export default Messages;