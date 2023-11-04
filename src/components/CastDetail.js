import { Container, Row, Col, Button, Form, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function CastDetail() {
  const { id } = useParams();
  console.log(id);
  return (
    <div style={{ paddingTop: "220px", paddingBottom: "60px" }}>
      <Row className="ipad-width">
        <Col md={4} sm={12} xs={12}>
          <div className="mv-ceb">
            <Image src="images/uploads/cebsingle2.png" alt="" fluid />
          </div>
          <Row>
            <Col md={12} style={{ paddingTop: "28px", paddingLeft: "20px" }}>
              <Image src="images/uploads/ads1.png" alt="" fluid />
            </Col>
          </Row>
        </Col>
        <Col md={8} sm={12} xs={12}>
          <div className="movie-single-ct">
            <h1 className="bd-hd">Hugh Jackman</h1>
            <div className="social-link cebsingle-socail">
              <a href="#film">
                <i className="ion-social-facebook"></i>
              </a>
              <a href="#film">
                <i className="ion-social-twitter"></i>
              </a>
              <a href="#film">
                <i className="ion-social-googleplus"></i>
              </a>
              <a href="#film">
                <i className="ion-social-linkedin"></i>
              </a>
            </div>
            <div className="movie-tabs">
              <div className="tabs">
                <ul className="tab-links tabs-mv">
                  <li className="active">
                    <a href="#overviewceb">Overview</a>
                  </li>
                  <li>
                    <a href="#film">films</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="overviewceb" className="tab active">
                    <Row>
                      <Col md={12} sm={12} xs={12}>
                        <Col md={3} className="sb-it">
                          <h6 style={{ color: "white" }}>Fullname: </h6>
                          <p>
                            <a href="#film">Hugh Jackman</a>
                          </p>
                        </Col>
                        <Col md={3} className="sb-it">
                          <h6 style={{ color: "white" }}>Date of Birth: </h6>
                          <p>June 24, 1982</p>
                        </Col>
                        <Col md={3} className="sb-it">
                          <h6 style={{ color: "white" }}>Country: </h6>
                          <p>Australian</p>
                        </Col>
                        <Col md={3} className="sb-it">
                          <h6 style={{ color: "white" }}>Height:</h6>
                          <p>186 cm</p>
                        </Col>
                        <Col
                          md={12}
                          className="title-hd-sm"
                          style={{ marginTop: "48px" }}
                        >
                          <h4>filmography</h4>
                          <a href="#film" className="time">
                            Full Filmography{" "}
                            <i className="ion-ios-arrow-right"></i>
                          </a>
                        </Col>
                        <Row style={{ marginLeft: "0px" }}>
                          <Col
                            md={3}
                            className="movie-item-style-2 movie-item-style-1"
                            style={{ margin: "0px" }}
                          >
                            <img src="images/uploads/mv1.jpg" alt="" />
                            <div className="hvr-inner">
                              <a href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </a>
                            </div>
                            <div className="mv-item-infor">
                              <h6>
                                <a href="#film">oblivion</a>
                              </h6>
                              <p className="rate">
                                <i className="ion-android-star"></i>
                                <span>8.1</span> /10
                              </p>
                            </div>
                          </Col>
                          <Col
                            md={3}
                            className="movie-item-style-2 movie-item-style-1"
                            style={{ margin: "0px" }}
                          >
                            <img src="images/uploads/mv2.jpg" alt="" />
                            <div className="hvr-inner">
                              <a href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </a>
                            </div>
                            <div className="mv-item-infor">
                              <h6>
                                <a href="#film">into the wild</a>
                              </h6>
                              <p className="rate">
                                <i className="ion-android-star"></i>
                                <span>7.8</span> /10
                              </p>
                            </div>
                          </Col>
                          <Col
                            md={3}
                            className="movie-item-style-2 movie-item-style-1"
                            style={{ margin: "0px" }}
                          >
                            <img src="images/uploads/mv1.jpg" alt="" />
                            <div className="hvr-inner">
                              <a href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </a>
                            </div>
                            <div className="mv-item-infor">
                              <h6>
                                <a href="#film">oblivion</a>
                              </h6>
                              <p className="rate">
                                <i className="ion-android-star"></i>
                                <span>8.1</span> /10
                              </p>
                            </div>
                          </Col>
                          <Col
                            md={3}
                            className="movie-item-style-2 movie-item-style-1"
                            style={{ margin: "0px" }}
                          >
                            <img src="images/uploads/mv2.jpg" alt="" />
                            <div className="hvr-inner">
                              <a href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </a>
                            </div>
                            <div className="mv-item-infor">
                              <h6>
                                <a href="#film">into the wild</a>
                              </h6>
                              <p className="rate">
                                <i className="ion-android-star"></i>
                                <span>7.8</span> /10
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <div className="col-md-4 col-xs-12 col-sm-12"></div>
                    </Row>
                  </div>
                  <div id="film" className="tab">
                    <Row>
                      <div className="topbar-filter">
                        <p>
                          Found <span>14 movies</span> in total
                        </p>
                        <Form.Label>Filter by:</Form.Label>
                        <Form.Select>
                          <option value="popularity">
                            Popularity Descending
                          </option>
                          <option value="popularity">
                            Popularity Ascending
                          </option>
                          <option value="rating">Rating Descending</option>
                          <option value="rating">Rating Ascending</option>
                          <option value="date">Release date Descending</option>
                          <option value="date">Release date Ascending</option>
                        </Form.Select>
                      </div>
                      <Row style={{ margin: "0px" }}>
                        <Col
                          md={3}
                          className="movie-item-style-2 movie-item-style-1"
                          style={{ margin: "0px" }}
                        >
                          <img src="images/uploads/mv1.jpg" alt="" />
                          <div className="hvr-inner">
                            <a href="moviesingle.html">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </a>
                          </div>
                          <div className="mv-item-infor">
                            <h6>
                              <a href="#film">oblivion</a>
                            </h6>
                            <p className="rate">
                              <i className="ion-android-star"></i>
                              <span>8.1</span> /10
                            </p>
                          </div>
                        </Col>
                        <Col
                          md={3}
                          className="movie-item-style-2 movie-item-style-1"
                          style={{ margin: "0px" }}
                        >
                          <img src="images/uploads/mv2.jpg" alt="" />
                          <div className="hvr-inner">
                            <a href="moviesingle.html">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </a>
                          </div>
                          <div className="mv-item-infor">
                            <h6>
                              <a href="#film">into the wild</a>
                            </h6>
                            <p className="rate">
                              <i className="ion-android-star"></i>
                              <span>7.8</span> /10
                            </p>
                          </div>
                        </Col>
                        <Col
                          md={3}
                          className="movie-item-style-2 movie-item-style-1"
                          style={{ margin: "0px" }}
                        >
                          <img src="images/uploads/mv1.jpg" alt="" />
                          <div className="hvr-inner">
                            <a href="moviesingle.html">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </a>
                          </div>
                          <div className="mv-item-infor">
                            <h6>
                              <a href="#film">oblivion</a>
                            </h6>
                            <p className="rate">
                              <i className="ion-android-star"></i>
                              <span>8.1</span> /10
                            </p>
                          </div>
                        </Col>
                        <Col
                          md={3}
                          className="movie-item-style-2 movie-item-style-1"
                          style={{ margin: "0px" }}
                        >
                          <img src="images/uploads/mv2.jpg" alt="" />
                          <div className="hvr-inner">
                            <a href="moviesingle.html">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </a>
                          </div>
                          <div className="mv-item-infor">
                            <h6>
                              <a href="#film">into the wild</a>
                            </h6>
                            <p className="rate">
                              <i className="ion-android-star"></i>
                              <span>7.8</span> /10
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
