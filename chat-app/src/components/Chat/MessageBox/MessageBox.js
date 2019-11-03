import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";

const MessageBox = ({ onSendMessage: pushSendMessage }) => {
    const [message, setMessage] = useState("");

    return (
            <Row>
                <Col sm={10}>
                    <Form.Control 
                        type="text" 
                        placeholder="Message" 
                        onChange={evt => setMessage(evt.target.value)}
                        onKeyDown={evt => {
                            if (evt.key === "Enter") {
                                evt.preventDefault();
                                pushSendMessage(message);
                                setMessage("");
                            }
                        }}
                        value={message}
                    />
                </Col>
                <Col sm={2}>
                    <Button variant="primary" onClick={evt => pushSendMessage(message)}>Send Message</Button>
                </Col>
            </Row>

    );
};

export default MessageBox;