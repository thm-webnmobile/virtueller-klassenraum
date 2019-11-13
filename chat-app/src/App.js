import React from "react";
import Authenticator from "./components/Authenticator";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";
import Chat from "./components/Chat";
import Detail from "./components/Detail";
import { useState } from "react";

const App = () => {
    const [show, setShow] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [boardOpen, setBoardOpen] = useState(false);
    const [detailOpen, setDetailOpen] = useState(false);

    return (
        <div class="layout">
            <Authenticator 
                show={ show } 
                setShow={ show => { setShow(show) } }>
            </Authenticator>
            { !show && <Sidebar 
                sidebarOpen={ sidebarOpen } 
                setSidebarOpen={ open => { setSidebarOpen(open) } }>
            </Sidebar> }
            <main>
                { !show && <Board 
                    boardOpen={ boardOpen }
                    setBoardOpen={ open => { setBoardOpen(open) } }>
                </Board> }
                { !show && <Chat 
                    sidebarOpen={ sidebarOpen } 
                    setSidebarOpen={ open => { setSidebarOpen(open) } } 
                    boardOpen={ boardOpen } 
                    setBoardOpen={ open => { setBoardOpen(open) } }
                    detailOpen={ detailOpen }
                    setDetailOpen={ open => { setDetailOpen(open) } } >
                </Chat> }
                { !show && <Detail 
                    detailOpen={ detailOpen }
                    setDetailOpen={ open => { setDetailOpen(open) } } >
                </Detail> }
            </main>
        </div>
    );
};

export default App;