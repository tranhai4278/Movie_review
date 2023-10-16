import { Container, Row, Col, Button, Form } from "react-bootstrap";
function Home() {
    return (
      <>
        <div className="slider movie-items">
      <Container>
        <Row>
          <Col className="social-link">
            <p>Follow us: </p>
            <a href="#">
              <i className="ion-social-facebook"></i>
            </a>
            <a href="#">
              <i className="ion-social-twitter"></i>
            </a>
            <a href="#">
              <i className="ion-social-googleplus"></i>
            </a>
            <a href="#">
              <i className="ion-social-youtube"></i>
            </a>
          </Col>
          
          <div className="slick-multiItemSlider">
                <div className="movie-item">
                  <div className="mv-img">
                    <a href="#">
                      <img
                        src="images/uploads/slider1.jpg"
                        alt=""
                        width="285"
                        height="437"
                      />
                    </a>
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="blue">
                        <a href="#">Sci-fi</a>
                      </span>
                    </div>
                    <h6>
                      <a href="#">Interstellar</a>
                    </h6>
                    <p>
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="mv-img">
                    <a href="#">
                      <img
                        src="images/uploads/slider2.jpg"
                        alt=""
                        width="285"
                        height="437"
                      />
                    </a>
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="yell">
                        <a href="#">action</a>
                      </span>
                    </div>
                    <h6>
                      <a href="#">The revenant</a>
                    </h6>
                    <p>
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="mv-img">
                    <a href="#">
                      <img
                        src="images/uploads/slider3.jpg"
                        alt=""
                        width="285"
                        height="437"
                      />
                    </a>
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="green">
                        <a href="#">comedy</a>
                      </span>
                    </div>
                    <h6>
                      <a href="#">Die hard</a>
                    </h6>
                    <p>
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="mv-img">
                    <a href="#">
                      <img
                        src="images/uploads/slider4.jpg"
                        alt=""
                        width="285"
                        height="437"
                      />
                    </a>
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="blue">
                        <a href="#">Sci-fi</a>
                      </span>{" "}
                      <span className="orange">
                        <a href="#">advanture</a>
                      </span>
                    </div>
                    <h6>
                      <a href="#">The walk</a>
                    </h6>
                    <p>
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="mv-img">
                    <a href="#">
                      <img
                        src="images/uploads/slider1.jpg"
                        alt=""
                        width="285"
                        height="437"
                      />
                    </a>
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="blue">
                        <a href="#">Sci-fi</a>
                      </span>
                    </div>
                    <h6>
                      <a href="#">Interstellar</a>
                    </h6>
                    <p>
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="mv-img">
                    <a href="#">
                      <img
                        src="images/uploads/slider2.jpg"
                        alt=""
                        width="285"
                        height="437"
                      />
                    </a>
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="yell">
                        <a href="#">action</a>
                      </span>
                    </div>
                    <h6>
                      <a href="#">The revenant</a>
                    </h6>
                    <p>
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="mv-img">
                    <img
                      src="images/uploads/slider3.jpg"
                      alt=""
                      width="285"
                      height="437"
                    />
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="green">
                        <a href="#">comedy</a>
                      </span>
                    </div>
                    <h6>
                      <a href="#">Die hard</a>
                    </h6>
                    <p>
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="mv-img">
                    <img
                      src="images/uploads/slider4.jpg"
                      alt=""
                      width="285"
                      height="437"
                    />
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="blue">
                        <a href="#">Sci-fi</a>
                      </span>{" "}
                      <span className="orange">
                        <a href="#">advanture</a>
                      </span>
                    </div>
                    <h6>
                      <a href="#">The walk</a>
                    </h6>
                    <p>
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="mv-img">
                    <img
                      src="images/uploads/slider3.jpg"
                      alt=""
                      width="285"
                      height="437"
                    />
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="green">
                        <a href="#">comedy</a>
                      </span>
                    </div>
                    <h6>
                      <a href="#">Die hard</a>
                    </h6>
                    <p>
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
              </div>
              
        </Row>
      </Container>
    </div>
        <div className="movie-items">
          <div className="container">
            <div className="row ipad-width">
              <div className="col-md-8">
                <div className="title-hd">
                  <h2>in theater</h2>
                  <a href="#" className="viewall">
                    View all <i className="ion-ios-arrow-right"></i>
                  </a>
                </div>
                <div className="tabs">
                  <ul className="tab-links">
                    <li className="active">
                      <a href="#tab1">#Popular</a>
                    </li>
                    <li>
                      <a href="#tab2"> #Coming soon</a>
                    </li>
                    <li>
                      <a href="#tab3"> #Top rated </a>
                    </li>
                    <li>
                      <a href="#tab4"> #Most reviewed</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div id="tab1" className="tab active">
                      <div className="row">
                        <div className="slick-multiItem">
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item1.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Interstellar</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item2.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The revenant</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item3.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item4.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The walk</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item5.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Interstellar</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item6.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The revenant</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item7.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item8.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The walk</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item3.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tab2" className="tab">
                      <div className="row">
                        <div className="slick-multiItem">
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item5.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Interstellar</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item6.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The revenant</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item7.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item8.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The walk</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item3.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tab3" className="tab">
                      <div className="row">
                        <div className="slick-multiItem">
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item1.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Interstellar</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item2.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The revenant</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item3.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item4.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The walk</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item3.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tab4" className="tab">
                      <div className="row">
                        <div className="slick-multiItem">
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item5.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Interstellar</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item6.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The revenant</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item7.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item8.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The walk</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item3.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="title-hd">
                  <h2>on tv</h2>
                  <a href="#" className="viewall">
                    View all <i className="ion-ios-arrow-right"></i>
                  </a>
                </div>
                <div className="tabs">
                  <ul className="tab-links-2">
                    <li>
                      <a href="#tab21">#Popular</a>
                    </li>
                    <li className="active">
                      <a href="#tab22"> #Coming soon</a>
                    </li>
                    <li>
                      <a href="#tab23"> #Top rated </a>
                    </li>
                    <li>
                      <a href="#tab24"> #Most reviewed</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div id="tab21" className="tab">
                      <div className="row">
                        <div className="slick-multiItem">
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item1.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Interstellar</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item2.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The revenant</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item3.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item4.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The walk</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item3.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tab22" className="tab active">
                      <div className="row">
                        <div className="slick-multiItem">
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item5.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Interstellar</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item6.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The revenant</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item7.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item8.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The walk</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item1.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Interstellar</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item2.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The revenant</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item3.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item4.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The walk</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item5.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Interstellar</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item6.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The revenant</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tab23" className="tab">
                      <div className="row">
                        <div className="slick-multiItem">
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item1.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Interstellar</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item2.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The revenant</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item3.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item4.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The walk</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item5.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Interstellar</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item6.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The revenant</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item7.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item8.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The walk</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item3.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tab24" className="tab">
                      <div className="row">
                        <div className="slick-multiItem">
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item5.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Interstellar</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item6.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The revenant</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item7.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item8.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">The walk</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="slide-it">
                            <div className="movie-item">
                              <div className="mv-img">
                                <img
                                  src="images/uploads/mv-item3.jpg"
                                  alt=""
                                  width="185"
                                  height="284"
                                />
                              </div>
                              <div className="hvr-inner">
                                <a href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  <i className="ion-android-arrow-dropright"></i>{" "}
                                </a>
                              </div>
                              <div className="title-in">
                                <h6>
                                  <a href="#">Die hard</a>
                                </h6>
                                <p>
                                  <i className="ion-android-star"></i>
                                  <span>7.4</span> /10
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sidebar">
                  <div className="ads">
                    <img
                      src="images/uploads/ads1.png"
                      alt=""
                      width="336"
                      height="296"
                    />
                  </div>
                  <div className="celebrities">
                    <h4 className="sb-title">Spotlight Celebrities</h4>
                    <div className="celeb-item">
                      <a href="#">
                        <img
                          src="images/uploads/ava1.jpg"
                          alt=""
                          width="70"
                          height="70"
                        />
                      </a>
                      <div className="celeb-author">
                        <h6>
                          <a href="#">Samuel N. Jack</a>
                        </h6>
                        <span>Actor</span>
                      </div>
                    </div>
                    <div className="celeb-item">
                      <a href="#">
                        <img
                          src="images/uploads/ava2.jpg"
                          alt=""
                          width="70"
                          height="70"
                        />
                      </a>
                      <div className="celeb-author">
                        <h6>
                          <a href="#">Benjamin Carroll</a>
                        </h6>
                        <span>Actor</span>
                      </div>
                    </div>
                    <div className="celeb-item">
                      <a href="#">
                        <img
                          src="images/uploads/ava3.jpg"
                          alt=""
                          width="70"
                          height="70"
                        />
                      </a>
                      <div className="celeb-author">
                        <h6>
                          <a href="#">Beverly Griffin</a>
                        </h6>
                        <span>Actor</span>
                      </div>
                    </div>
                    <div className="celeb-item">
                      <a href="#">
                        <img
                          src="images/uploads/ava4.jpg"
                          alt=""
                          width="70"
                          height="70"
                        />
                      </a>
                      <div className="celeb-author">
                        <h6>
                          <a href="#">Justin Weaver</a>
                        </h6>
                        <span>Actor</span>
                      </div>
                    </div>
                    <a href="#" className="btn">
                      See all celebrities<i className="ion-ios-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="trailers">
          <div className="container">
            <div className="row ipad-width">
              <div className="col-md-12">
                <div className="title-hd">
                  <h2>in theater</h2>
                  <a href="#" className="viewall">
                    View all <i className="ion-ios-arrow-right"></i>
                  </a>
                </div>
                <div className="videos">
                  <div className="slider-for-2 video-ft">
                    <div>
                      <iframe
                        className="item-video"
                        src="#"
                        data-src="https://www.youtube.com/embed/1Q8fG0TtVAY"
                      ></iframe>
                    </div>
                    <div>
                      <iframe
                        className="item-video"
                        src="#"
                        data-src="https://www.youtube.com/embed/w0qQkSuWOS8"
                      ></iframe>
                    </div>
                    <div>
                      <iframe
                        className="item-video"
                        src="#"
                        data-src="https://www.youtube.com/embed/44LdLqgOpjo"
                      ></iframe>
                    </div>
                    <div>
                      <iframe
                        className="item-video"
                        src="#"
                        data-src="https://www.youtube.com/embed/gbug3zTm3Ws"
                      ></iframe>
                    </div>
                    <div>
                      <iframe
                        className="item-video"
                        src="#"
                        data-src="https://www.youtube.com/embed/e3Nl_TCQXuw"
                      ></iframe>
                    </div>
                    <div>
                      <iframe
                        className="item-video"
                        src="#"
                        data-src="https://www.youtube.com/embed/NxhEZG0k9_w"
                      ></iframe>
                    </div>
                  </div>
                  <div className="slider-nav-2 thumb-ft">
                    <div className="item">
                      <div className="trailer-img">
                        <img
                          src="images/uploads/trailer7.jpg"
                          alt="photo by Barn Images"
                          width="4096"
                          height="2737"
                        />
                      </div>
                      <div className="trailer-infor">
                        <h4 className="desc">Wonder Woman</h4>
                        <p>2:30</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="trailer-img">
                        <img
                          src="images/uploads/trailer2.jpg"
                          alt="photo by Barn Images"
                          width="350"
                          height="200"
                        />
                      </div>
                      <div className="trailer-infor">
                        <h4 className="desc">
                          Oblivion: Official Teaser Trailer
                        </h4>
                        <p>2:37</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="trailer-img">
                        <img
                          src="images/uploads/trailer6.jpg"
                          alt="photo by Joshua Earle"
                        />
                      </div>
                      <div className="trailer-infor">
                        <h4 className="desc">
                          Exclusive Interview: Skull Island
                        </h4>
                        <p>2:44</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="trailer-img">
                        <img
                          src="images/uploads/trailer3.png"
                          alt="photo by Alexander Dimitrov"
                          width="100"
                          height="56"
                        />
                      </div>
                      <div className="trailer-infor">
                        <h4 className="desc">
                          Logan: Director James Mangold Interview
                        </h4>
                        <p>2:43</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="trailer-img">
                        <img
                          src="images/uploads/trailer4.png"
                          alt="photo by Wojciech Szaturski"
                          width="100"
                          height="56"
                        />
                      </div>
                      <div className="trailer-infor">
                        <h4 className="desc">
                          Beauty and the Beast: Official Teaser Trailer 2
                        </h4>
                        <p>2: 32</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="trailer-img">
                        <img
                          src="images/uploads/trailer5.jpg"
                          alt="photo by Wojciech Szaturski"
                          width="360"
                          height="189"
                        />
                      </div>
                      <div className="trailer-infor">
                        <h4 className="desc">Fast&Furious 8</h4>
                        <p>3:11</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Home;
  
  