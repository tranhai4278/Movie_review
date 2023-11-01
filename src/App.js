import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import {
  Home, Header, Footer, Login, Signup, ResetPassword, ResetPassword2, BreadCrumb, Sidebar, ChangePassword, UserProfile,
  Filter, MovieGrid, MovieList, MovieDetail, Wishlist1, WishlistGrid, MovieRated, CastDetail, AdminSidebar, Table
} from './components/Index'
import { Container, Row, Col, Button, Form } from "react-bootstrap";
function App() {
  return (
    <div style={{ backgroundColor: '#020d18' }}>
      <BrowserRouter >
        <div>
          {window.location.pathname.startsWith('/admin') ? null : <Header />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/resetpassword2" element={<ResetPassword2 />} />
          </Routes>

          <Routes>
            <Route path="/userprofile" element={<BreadCrumb />} />
            <Route path="/changepassword" element={<BreadCrumb />} />
            <Route path="/wishlistgrid" element={<BreadCrumb />} />
            <Route path="/wishlist" element={<BreadCrumb />} />
            <Route path="/movierated" element={<BreadCrumb />} />
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
                  <Route path="/userprofile" element={<UserProfile />} />
                  <Route path="/changepassword" element={<ChangePassword />} />
                  <Route path="/wishlistgrid" element={<WishlistGrid />} />
                  <Route path="/wishlist" element={<Wishlist1 />} />
                  <Route path="/movierated" element={<MovieRated />} />
                </Routes>
              </Col>
            </Row>
          </Container>

          <Container >
            <Row className="ipad-width">
              <Col md={8} sm={12} xs={12}>
                <Routes>
                  <Route path="/moviegrid" element={<MovieGrid />} />
                  <Route path="/movielist" element={<MovieList />} />
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
              <Route path="/moviedetail" element={<MovieDetail />} />
              <Route path="/castdetail" element={<CastDetail />} />
            </Routes>
          </Container>

          <div>
            <div class="nav-md">
              <div class="body">
                <Row style={{ backgroundColor: 'white' }}>
                  <Col md={2} sm={12} xs={12}>
                    <Routes>
                      <Route path="/admin" element={<AdminSidebar />} />
                    </Routes>
                  </Col>
                  <Col md={10} sm={12} xs={12}>
                    <Routes>
                      <Route path="/admin" element={<Table />} />
                    </Routes>
                  </Col>
                </Row>
              </div>
            </div>
          </div>

          {window.location.pathname.startsWith('/admin') ? null : <Footer />}
        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
