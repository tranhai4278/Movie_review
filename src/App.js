import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import {Home, Header, Footer, Login, Signup, ResetPassword, ResetPassword2, Breadcrumb, Sidebar, Changepassword, Userprofile} from './components/Index'
import { Container, Row, Col, Button, Form } from "react-bootstrap";
function App() {
  return (
    <>
    <BrowserRouter>
       <div>
    <Header></Header>
    <Login></Login>
    <Signup></Signup>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/resetpassword2" element={<ResetPassword2 />} />
    </Routes>

    <Routes>
      <Route path="/userprofile" element={<Breadcrumb />} />
      <Route path="/changepassword" element={<Breadcrumb />} />
    </Routes>
        <div className="page-single">
          <Container>
            <Row className="ipad-width">
              <Col md={3} sm={12} xs={12}>
                <Routes>
                  <Route path="/userprofile" element={<Sidebar />} />
                  <Route path="/changepassword" element={<Sidebar />} />
                </Routes>
              </Col>
              <Col md={9} sm={12} xs={12}>
                <Routes>
                  <Route path="/userprofile" element={<Userprofile />} />
                  <Route path="/changepassword" element={<Changepassword />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </div>

    <Footer></Footer>
    </div>
    </BrowserRouter>
    

    </>
  );
}

export default App;
