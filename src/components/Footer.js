import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Form, Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="ht-footer" id="footer">
      <Container>
        <Row className="flex-parent-ft">
          <Col className="flex-child-ft item1">
            <Link href="index-2.html"><img className="logo" width="250" src="images/logo1.png" alt="" /></Link>
            <p>Group 2 SE1741 - FPT University</p>
            <p>Call us: <Link href="#">(+84) 834235369</Link></p>
          </Col>
          <Col className="flex-child-ft item2">
            <h4>Resources</h4>
            <ul>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Fermovie</Link></li>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Help Center</Link></li>
            </ul>
          </Col>
          <Col className="flex-child-ft item3">
            <h4>Legal</h4>
            <ul>
              <li><Link href="#">Terms of Use</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Security</Link></li>
            </ul>
          </Col>
          <Col className="flex-child-ft item4">
            <h4>Account</h4>
            <ul>
              <li><Link href="#">My Account</Link></li>
              <li><Link href="#">Wishlist</Link></li>
              <li><Link href="#">Collections</Link></li>
            </ul>
          </Col>
          <Col className="flex-child-ft item5">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter system now to get the latest news from us.</p>
            <Form>
              <Form.Control type="text" placeholder="Enter your email..." />
              <Button variant="primary" style={{marginTop:'16px'}}>Subscribe now <i className="ion-ios-arrow-forward"></i></Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className="ft-copyright">
        <Container>
          <Row>
            <Col className="ft-left">
              <p><Link target="_blank" href="#">Fermovie</Link></p>
            </Col>
            <Col className="backtotop">
              <p><Link href="#" id="back-to-top">Back to top <i className="ion-ios-arrow-thin-up"></i></Link></p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};


