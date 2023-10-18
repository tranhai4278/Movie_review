import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import backgroundImage from "../image/slider-bg.jpg"; // Đường dẫn đến hình ảnh nền
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Do something with the login data, like send it to an API
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formStyle = {
    marginTop: "90px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "50px",
    borderRadius: "10px",
  };
  const buttonStyle = {
    width: "100%", // Đảm bảo nút chiếm toàn bộ chiều rộng của form
    fontSize: "20px", // Kích thước chữ của nút
    textAlign: "center",
  };
  return (
    <div style={backgroundStyle}>
      <div style={formStyle}>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ textAlign: "center" }}
          >
            <h3>Login</h3>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="email"
              placeholder="Username"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Form.Text className="text-muted">
              We'll never share your password with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 6 }}>
              <Form.Check type="checkbox" label="Remember me" />
            </Col>
            <Col sm={{ span: 6 }}>
              <Link>Forget Password?</Link>
            </Col>
          </Form.Group>

          <Form.Group style={buttonStyle}>
            <Button
              variant="danger"
              type="submit"
              size="md"
              style={{ width:'100%' }}
            >
              Login
            </Button>
          </Form.Group>
          <Form.Text className="text-muted" style={{ textAlign: "center" }}>
            or
          </Form.Text>
          <Form.Group style={buttonStyle}>
            <Button
              variant="primary"
              type="submit"
              size="md"
              style={{ width:'100%' }}
            >
              Google
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Login;
