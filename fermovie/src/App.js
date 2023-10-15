import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Userprofile from "./components/Userprofile";
import Changepassword from "./components/Changepassword";
import Breadcrumb from "./components/Breadcrumb";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import ResetPassword2 from "./components/ResetPassword2";
function App() {
  return (
    <BrowserRouter>
      // <div>
        <Breadcrumb />
        <div className="page-single">
        //   <Container>
            <Row className="ipad-width">
          //     <Col md={3} sm={12} xs={12}>
                <Sidebar />
          //     </Col>
    //           <Col md={9} sm={12} xs={12}>
            //     <Routes>
    //         //       <Route path="/userprofile" element={<Userprofile />} />
    //               <Route path="/changepassword" element={<Changepassword />} />
    //           //   </Routes>
         //      </Col>
    //         </Row>
      //     </Container>
      //   </div>
      // </div>
    <Home></Home>
    </BrowserRouter>

    <Router>
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/resetpassword2" element={<ResetPassword2 />} />
      </Routes>
  </Router>
  );
}

export default App;
