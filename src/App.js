import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import {Home, Header, Footer, Login, Signup, ResetPassword, ResetPassword2, Breadcrumb, Sidebar, Changepassword, Userprofile, Filter, Moviegrid, Movielist, Moviedetail} from './components/Index'
import { Container, Row, Col, Button, Form } from "react-bootstrap";
function App() {
  return (
    <>
    <BrowserRouter>
       <div>
    <Header></Header>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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

        <div className="page-single">
          <Container>
            <Row className="ipad-width">
              <Col md={8} sm={12} xs={12}>
                <Routes>
                  <Route path="/moviegrid" element={<Moviegrid />} />
                  <Route path="/movielist" element={<Movielist />} />
                </Routes>
              </Col>
              <Col md={4} sm={12} xs={12}>
                <Routes>
                  <Route path="/moviegrid" element={<Filter />} />
                  <Route path="/movielist" element={<Filter />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="page-single">
          <Container>
                <Routes>
                  <Route path="/moviedetail" element={<Moviedetail />} />
                </Routes>
          </Container>
        </div>

    <Footer></Footer>
    </div>
    </BrowserRouter>
    

    </>
  );
}

export default App;
