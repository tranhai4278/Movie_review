import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Form, Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="ht-footer">
      <Container>
        <Row className="flex-parent-ft">
          <Col className="flex-child-ft item1">
            <a href="index-2.html"><img className="logo" width="250" src="images/logo1.png" alt="" /></a>
            <p>Group 2 SE1741 - FPT University</p>
            <p>Call us: <a href="#">(+84) 834235369</a></p>
          </Col>
          <Col className="flex-child-ft item2">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Fermovie</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </Col>
          <Col className="flex-child-ft item3">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </Col>
          <Col className="flex-child-ft item4">
            <h4>Account</h4>
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Collections</a></li>
            </ul>
          </Col>
          <Col className="flex-child-ft item5">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter system now to get the latest news from us.</p>
            <Form>
              <Form.Control type="text" placeholder="Enter your email..." />
              <Button variant="primary" style={{marginTop:'16px'}}>Subscribe now <i class="ion-ios-arrow-forward"></i></Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className="ft-copyright">
        <Container>
          <Row>
            <Col className="ft-left">
              <p><a target="_blank" href="#">Fermovie</a></p>
            </Col>
            <Col className="backtotop">
              <p><a href="#" id="back-to-top">Back to top <i class="ion-ios-arrow-thin-up"></i></a></p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
