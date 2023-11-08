import { BrowserRouter, Link, Route, Routes, useMatch } from "react-router-dom";
import {
  Home,
  Header,
  Footer,
  Login,
  Signup,
  ResetPassword,
  ResetPassword2,
  BreadCrumb,
  Sidebar,
  ChangePassword,
  UserProfile,
  Filter,
  MovieGrid,
  MovieList,
  MovieDetail,
  Wishlist1,
  WishlistGrid,
  MovieRated,
  CastDetail,
  AdminSidebar,
  Table,
  AdminTopNav,
  AdminFooter,
  Search
} from "./components/Index";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminMovieList from "./components/AdminMovieList";
import AdminLayout from "./layout/AdminLayout";

function App() {
  return (
    <div style={{ backgroundColor: "#020d18", overflowX: 'hidden' }}>
      <BrowserRouter>
        <div>
          {window.location.pathname.startsWith("/admin") ? null : <Header />}
          <ToastContainer position="top-right" autoClose={2000} />
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
                  <Route path="/wishlist" element={<Sidebar />} />
                  {/* <Route path="/wishlist" element={<Sidebar />} /> */}
                  <Route path="/movierated" element={<Sidebar />} />
                </Routes>
              </Col>
              <Col md={9} sm={12} xs={12}>
                <Routes>
                  <Route path="/userprofile" element={<UserProfile />} />
                  <Route path="/changepassword" element={<ChangePassword />} />
                  <Route path="/wishlist" element={<WishlistGrid />} />
                  {/* <Route path="/wishlist" element={<Wishlist1 />} /> */}
                  <Route path="/movierated" element={<MovieRated />} />
                </Routes>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row className="ipad-width">
              <Routes>
                  <Route path="/movie" element={<Search />} />
                </Routes>
              {/* <Col md={8} sm={12} xs={12}>
                <Routes>
                  <Route path="/MovieGrid" element={<MovieGrid />} />
                  <Route path="/movielist" element={<MovieList />} />
                </Routes>
              </Col>
              <Col md={4} sm={12} xs={12}>
                <Routes>
                  <Route path="/MovieGrid" element={<Filter />} />
                  <Route path="/movielist" element={<Filter />} />
                </Routes>
              </Col> */}
            </Row>
          </Container>

          <Container>
            <Routes>
              <Route path="/moviedetail/:id" element={<MovieDetail />} />
              <Route path="/castdetail/:id" element={<CastDetail />} />
            </Routes>
          </Container>

          <div>
            <div className="nav-md">
              <div className="body">
                <div className="main_container">
                <Row style={{ backgroundColor: "white" }}>
                  <Col md={2} sm={12} xs={12}>
                    <Routes>
                      <Route path="/admin" element={<AdminSidebar />} />
                    </Routes>
                  </Col>
                  <Col md={10} sm={12} xs={12}>
                    <Routes>
                      <Route path="/admin" element={<AdminTopNav />} />
                    </Routes>
                    <Routes>
                      <Route path="/admin" element={<Table />} />
                    </Routes>
                    <Routes>
                      <Route path="/admin" element={<AdminFooter />} />
                    </Routes>
                  </Col>
                </Row>
                </div>
              </div>
            </div>
          </div>

          {window.location.pathname.startsWith("/admin") ? null : <Footer />}
        </div>
        <div style={{ backgroundColor: "white", overflowX:"none" }}>
          <Routes>
            <Route path="admin/movie-list" element={<AdminLayout><AdminMovieList /></AdminLayout>} />
            <Route path="admin/movie/:movieId" element={<AdminLayout><AdminMovieList /></AdminLayout>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
