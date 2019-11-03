import React from "react";
import useChat from "./_useChat";
import MessageBox from "./MessageBox";
import Messages from "./Messages";
import Container from "react-bootstrap/Container";


const Chat = () => {
    const { messages, sendMessage } = useChat();

    return (
        <Container>
            <Messages messages={messages} />
            <MessageBox 
                onSendMessage={message => {
                    sendMessage({ message });
                }} 
            />
        </Container>
    );
};

export default Chat;