import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Authenticator = ({ show: show, setShow: setShow }) => {
    return (
        <Modal show={show}>
            <Modal.Header>
                <h5><b>Lorem</b></h5>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <FormControl placeholder="Name" />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl placeholder="Room ID" />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <InputGroup>
                    <Button onClick={ () => { setShow(!show) } }>Lorem ipsum</Button>
                </InputGroup>
            </Modal.Footer>
        </Modal>
    );
};

export default Authenticator;