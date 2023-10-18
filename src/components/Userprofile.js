import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Userprofile() {
    return (
        <div className="form-style-1 user-pro" action="#">
            <Form action="#" className="user">
                <h4>01. Profile details</h4>
                <Form.Group>
                    <Form.Label for="username-3">Username</Form.Label>
                    <Form.Control
                        type="text"
                        id="username-3"
                        placeholder="edwardkennedy"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label for="email-3">Email Address</Form.Label>
                    <Form.Control
                        type="text"
                        id="email-3"
                        placeholder="edward@kennedy.com"
                    />
                </Form.Group>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label for="firstname">First Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="firstname"
                                placeholder="Edward"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label for="lastname">Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="lastname"
                                placeholder="Kennedy"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label for="country">Country</Form.Label>
                            <Form.Control as="select" id="country">
                                <option value="united">United States</option>
                                <option value="saab">Others</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label for="state">State</Form.Label>
                            <Form.Control as="select" id="state">
                                <option value="united">New York</option>
                                <option value="saab">Others</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit" style={{marginTop: '20px'}}>
                    Save
                </Button>
            </Form>

        </div>
    );
}

export default Userprofile;
