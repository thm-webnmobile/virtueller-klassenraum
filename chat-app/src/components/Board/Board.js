import React from "react";
import Form from "react-bootstrap/Form"

const Board = ({ boardOpen: boardOpen, setBoardOpen: setBoardOpen }) => {
    return (
        <div className={ "board" + (boardOpen ? " open" : "") }>
            <div class="board-head">
                <span><b>Board</b></span>
                <ul>
                    <li class="d-md-none" onClick={ () => { setBoardOpen(!boardOpen) } }>
                        <a class="btn btn-outline-light" onClick={ () => { setBoardOpen(!boardOpen) } }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="board-body">
                <ul>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                </ul>
            </div>
            <div class="board-toggler" onClick={ () => setBoardOpen(!boardOpen) }></div>
        </div>
    );
};

export default Board;