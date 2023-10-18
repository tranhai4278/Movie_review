import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function Changepassword() {
    return (
        <div className="form-style-1 user-pro" action="#">
            <Form action="#" className="password">
                <h4>02. Change password</h4>
                <Form.Group>
                    <Form.Label for="oldpassword">Old Password</Form.Label>
                    <Form.Control
                        type="text"
                        id="oldpassword"
                        placeholder="**********"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label for="newpassword">New Password</Form.Label>
                    <Form.Control
                        type="text"
                        id="newpassword"
                        placeholder="***************"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label for="confirmnewpassword">Confirm New Password</Form.Label>
                    <Form.Control
                        type="text"
                        id="confirmnewpassword"
                        placeholder="***************"
                    />
                </Form.Group>
                <Button variant="primary" type="submit" style={{marginTop: '20px'}}>
                    Change
                </Button>
            </Form>
        </div>
    );
}

export default Changepassword;
