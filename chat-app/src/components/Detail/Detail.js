import React from "react";
import Form from "react-bootstrap/Form"

const Details = ({ detailOpen: detailOpen, setDetailOpen: setDetailOpen }) => {
    return (
        <div className={ "detail" + (detailOpen ? " open" : "") }>
            <div class="detail-head">
                <span><b>Details</b></span>
                <ul>
                    <li>
                        <a class="btn btn-outline-light" onClick={ () => setDetailOpen(!detailOpen) }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="detail-body">
                <div class="detail-content">
                    <h6>Lorem ipsum dolor</h6>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
                <div class="detail-content">
                    <h6>Lorem ipsum dolor</h6>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
                <div class="detail-content">
                    <h6>Lorem ipsum dolor</h6>
                    <Form>
                        <Form.Check 
                            type="switch"
                            id="dw-1"
                            label="Lorem ipsum dolor"
                        />
                        <Form.Check 
                            checked
                            type="switch"
                            id="dw-2"
                            label="Lorem ipsum dolor"
                        />
                        <Form.Check 
                            disabled
                            type="switch"
                            id="dw-3"
                            label="Lorem ipsum dolor"
                        />
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Details;