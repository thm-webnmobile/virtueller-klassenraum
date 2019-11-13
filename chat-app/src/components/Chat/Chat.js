import React from "react";
import useChat from "./_useChat";
import MessageBox from "./MessageBox";
import Messages from "./Messages";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Chat = ({ sidebarOpen: sidebarOpen, setSidebarOpen: setSidebarOpen, boardOpen: boardOpen, setBoardOpen: setBoardOpen, detailOpen: detailOpen, setDetailOpen: setDetailOpen }) => {
    const { messages, sendMessage } = useChat();

    return (
        <div class="chat">
            <div class="chat-head">
                <div class="chat-head-title">
                    <span><b>Chat</b></span>
                </div>
                <div class="chat-head-action">
                    <ul>
                        <li class="d-xl-none">
                            <Button onClick={ () => setSidebarOpen(!sidebarOpen) }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            </Button>
                        </li>
                        <li class="d-lg-none">
                            <Button onClick={ () => setBoardOpen(!boardOpen) }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                            </Button>
                        </li>
                        <li>
                            <DropdownButton alignRight title={ <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg> }>
                                <Dropdown.Item onClick={ () => setDetailOpen(!detailOpen) }>Details</Dropdown.Item>
                            </DropdownButton>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="chat-body">
                <Messages messages={messages} />
            </div>
            <div class="chat-footer">
                <MessageBox 
                    onSendMessage={message => {
                        sendMessage({ message });
                    }} 
                />
            </div>
        </div>
    );
};

export default Chat;