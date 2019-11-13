import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";

const Sidebar = ({ sidebarOpen: sidebarOpen, setSidebarOpen: setSidebarOpen }) => {
    return (
        <aside>
            <div className={ "sidebar" + (sidebarOpen ? " open" : "") }>
                <div class="sidebar-head">
                    <div class="sidebar-profile">
                        <div class="sidebar-avatar"></div>
                        <h6>Your Profile</h6>
                    </div>
                    <div class="sidebar-form">
                        <Form.Control 
                            type="text" 
                            placeholder="Room ID" 
                        />
                        <Button variant="block">Enter</Button>
                    </div>
                </div>
                <div class="sidebar-body">
                    <div class="sidebar-rooms">
                        <ul>
                            <li>Lorem ipsum #1</li>
                            <li>Lorem ipsum #2</li>
                            <li>Lorem ipsum #3</li>
                            <li>Lorem ipsum #4</li>
                            <li>Lorem ipsum #5</li>
                            <li>Lorem ipsum #6</li>
                            <li>Lorem ipsum #7</li>
                            <li>Lorem ipsum #8</li>
                            <li>Lorem ipsum #9</li>
                            <li>Lorem ipsum #10</li>
                            <li>Lorem ipsum #11</li>
                            <li>Lorem ipsum #12</li>
                            <li>Lorem ipsum #13</li>
                            <li>Lorem ipsum #14</li>
                            <li>Lorem ipsum #15</li>
                            <li>Lorem ipsum #16</li>
                            <li>Lorem ipsum #17</li>
                            <li>Lorem ipsum #18</li>
                            <li>Lorem ipsum #19</li>
                            <li>Lorem ipsum #20</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={ "sidebar-backdrop" + (sidebarOpen ? " open" : "") } onClick={ () => setSidebarOpen(!sidebarOpen) }></div>
        </aside>
    );
};

export default Sidebar;