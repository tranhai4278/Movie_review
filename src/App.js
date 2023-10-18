import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import {Home, Header, Footer, Login, Signup, ResetPassword, ResetPassword2, Breadcrumb, Sidebar, Changepassword, Userprofile, 
  Filter, Moviegrid, Movielist, Moviedetail, Wishlist1, Wishlistgrid, Movierated} from './components/Index'
import { Container, Row, Col, Button, Form } from "react-bootstrap";
function App() {
  return (
    <div style={{backgroundColor: '#020d18'}}>
    <BrowserRouter >
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
      <Route path="/wishlistgrid" element={<Breadcrumb />} />
      <Route path="/wishlist" element={<Breadcrumb />} />
      <Route path="/movierated" element={<Breadcrumb />} />
    </Routes>
          <Container>
            <Row className="ipad-width">
              <Col md={3} sm={12} xs={12}>
                <Routes>
                  <Route path="/userprofile" element={<Sidebar />} />
                  <Route path="/changepassword" element={<Sidebar />} />
                  <Route path="/wishlistgrid" element={<Sidebar />} />
                  <Route path="/wishlist" element={<Sidebar />} />
                  <Route path="/movierated" element={<Sidebar />} />
                </Routes>
              </Col>
              <Col md={9} sm={12} xs={12}>
                <Routes>
                  <Route path="/userprofile" element={<Userprofile />} />
                  <Route path="/changepassword" element={<Changepassword />} />
                  <Route path="/wishlistgrid" element={<Wishlistgrid />} />
                  <Route path="/wishlist" element={<Wishlist1 />} />
                  <Route path="/movierated" element={<Movierated />} />
                </Routes>
              </Col>
            </Row>
          </Container>

          <Container >
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

          <Container>
                <Routes>
                  <Route path="/moviedetail" element={<Moviedetail />} />
                </Routes>
          </Container>

    <Footer></Footer>
    </div>
    </BrowserRouter>
    

    </div>
  );
}

export default App;
