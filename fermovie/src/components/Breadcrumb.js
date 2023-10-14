import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Breadcrumb() {
    return (
        <div className="hero user-hero">
          <Container>
            <Row>
              <Col md={12}>
                <div className="hero-ct">
                  <h1>Edward Kennedy's Profile</h1>

                  <ul className="breadcumb">
                    <li className="active breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/userprofile"><span className="ion-ios-arrow-right"></span>Profile</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    );
}

export default Breadcrumb;
