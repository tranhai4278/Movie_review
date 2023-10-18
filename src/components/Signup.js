import React, { useState } from "react";
import { Form, Button, } from "react-bootstrap";
import backgroundImage from "../image/slider-bg.jpg"; // Đường dẫn đến hình ảnh nền


const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Re-Password:", rePassword);
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
            <h3>Sign Up</h3>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
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
          <Form.Group className="mb-3" controlId="formBasicRePassword">
            <Form.Label>Re-password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-Pasword"
              value={rePassword}
              onChange={handleRePasswordChange}
            />
            <Form.Text className="text-muted">
              We'll never share your password with anyone else.
            </Form.Text>
          </Form.Group>
          

          
          <Form.Group style={buttonStyle}>
            <Button
              variant="danger"
              type="submit"
              size="lg"
              style={{ padding: "10px 120px" }}
            >
              Sign up
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
