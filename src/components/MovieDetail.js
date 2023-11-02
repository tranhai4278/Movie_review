import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Row, Col, Button, Form, Image } from "react-bootstrap";
import axios from "axios";

export default function MovieDetail() {
  const starStyle = {
    fontSize: "36px",
    color: "#f5b50a",
  };

  const rateStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderLeft: "1px solid #405266",
    paddingLeft: "30px",
    height: "54px",
  };

  // const {id} = useParams();
  const { id } = { id: 1 };
  // Data moive detail
  const [movie, setMovie] = useState({});

  // rates total
  const [usersRate, setUsersRate] = useState([]);

  // Genres of this moive
  const [movieGenres, setMovieGenres] = useState([]);

  // Casts of this moive
  const [movieCasts, setMovieCasts] = useState([]);

  /**
   * Init: fetch movie data by movie_id
   */
  useEffect(() => {
    axios
      .get(`http://localhost:9999/movie/${id}`)
      .then((response) => response.data)
      .then((data) => setMovie(data));
  }, [id]);

  /**
   * Init: fetch total rating data by movie_id
   */
  useEffect(() => {
    axios
      .get(`http://localhost:9999/rate?movie_id=${id}`)
      .then((response) => response.data)
      .then((data) => setUsersRate(data));
  }, [id]);

  /**
   * Init: fetch total genre by movie_id
   */
  useEffect(() => {
    axios
      // fetch all genre_id by movie_id
      .get(`http://localhost:9999/movie_genre?movie_id=${id}`)
      .then((response) => response.data)
      .then((data) => {
        const query = data.reduce(
          (query, curItem) => query + "id=" + curItem.genre_id + "&",
          ""
        );
        // fetch all genre item by genre_id
        axios
          .get(`http://localhost:9999/genre?${query}`)
          .then((response) => response.data)
          .then((data) => setMovieGenres(data));
      });
  }, [id]);

  /**
   * Init: fetch total cast by movie_id
   */
  useEffect(() => {
    axios
      // fetch all cast_id by movie_id
      .get(`http://localhost:9999/movie_detail?movie_id=${id}`)
      .then((response) => response.data)
      .then((data) => {
        const query = data.reduce(
          (query, curItem) => query + "id=" + curItem.cast_id + "&",
          ""
        );
        // fetch all cast item by cast_id
        axios
          .get(`http://localhost:9999/cast?${query}`)
          .then((response) => response.data)
          .then((data) => setMovieCasts(data));
      });
  }, [id]);

  return (
    <div style={{ paddingTop: "220px" }}>
      <Row className="ipad-width2">
        <Col md={4} sm={12} xs={12}>
          <div className="movie-img sticky-sb">
            <Image src={movie?.img_url} alt="" fluid />
            <div className="movie-btn">
              <div
                className="btn-transform transform-vertical red"
                style={{ width: "95%", marginTop: "24px" }}
              >
                <div>
                  <Button className="item item-1" variant="danger" size="lg">
                    <i className="ion-play"></i> Watch Trailer
                  </Button>
                </div>
                <div>
                  <Link
                    href={movie?.trailers_url}
                    className="item item-2 redbtn fancybox-media hvr-grow"
                  >
                    <i className="ion-play"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Col md={12} style={{ paddingTop: "28px", paddingLeft: "0px" }}>
            <Image src="images/uploads/ads1.png" alt="" />
          </Col>
        </Col>
        <Col md={8} sm={12} xs={12}>
          <div className="movie-single-ct main-content">
            <h1 className="bd-hd">
              {movie?.name} <span>{movie?.release_year}</span>
            </h1>
            <div className="social-btn">
              <Link href="1" className="parent-btn">
                <i className="ion-heart"></i> Add to Favorite
              </Link>
              <div className="hover-bnt">
                <Link href="1" className="parent-btn">
                  <i className="ion-android-share-alt"></i>share
                </Link>
                <div className="hvr-item">
                  <Link href="1" className="hvr-grow">
                    <i className="ion-social-facebook"></i>
                  </Link>
                  <Link href="1" className="hvr-grow">
                    <i className="ion-social-twitter"></i>
                  </Link>
                  <Link href="1" className="hvr-grow">
                    <i className="ion-social-googleplus"></i>
                  </Link>
                  <Link href="1" className="hvr-grow">
                    <i className="ion-social-youtube"></i>
                  </Link>
                </div>
              </div>
            </div>
            <Row className="movie-rate">
              <Col md={3} xs={12}>
                <Row
                  className="rate"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Col md={3} xs={12}>
                    <i
                      className="ion-android-star"
                      style={{ fontSize: "36px", color: "#f5b50a" }}
                    ></i>
                  </Col>
                  <Col md={9} xs={12}>
                    <p>
                      <span style={{ color: "white", fontSize: "18px" }}>
                        {usersRate?.reduce(
                          (totalRate, currentItem) =>
                            totalRate + currentItem.rating,
                          0
                        ) / usersRate?.length}
                      </span>{" "}
                      /10
                      <br />
                      <span className="rv" style={{ color: "#337AB7" }}>
                        {usersRate?.length} Reviews
                      </span>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={9} xs={12} style={{ marginLeft: "-34px" }}>
                <Row className="rate-star" style={rateStyle}>
                  <Col>
                    <h4 style={{ color: "#abb7c4", marginRight: "20px" }}>
                      Rate This Movie:
                    </h4>
                  </Col>
                  <Col>
                    <i className="ion-android-star" style={starStyle}></i>{" "}
                  </Col>
                  <Col>
                    <i className="ion-android-star" style={starStyle}></i>{" "}
                  </Col>
                  <Col>
                    <i className="ion-android-star" style={starStyle}></i>{" "}
                  </Col>
                  <Col>
                    <i className="ion-android-star" style={starStyle}></i>{" "}
                  </Col>
                  <Col>
                    <i className="ion-android-star" style={starStyle}></i>{" "}
                  </Col>
                  <Col>
                    <i className="ion-android-star" style={starStyle}></i>{" "}
                  </Col>
                  <Col>
                    <i className="ion-android-star" style={starStyle}></i>{" "}
                  </Col>
                  <Col>
                    <i className="ion-android-star" style={starStyle}></i>{" "}
                  </Col>
                  <Col>
                    <i className="ion-ios-star-outline" style={starStyle}></i>{" "}
                  </Col>
                  <Col>
                    <i className="ion-ios-star-outline" style={starStyle}></i>{" "}
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="movie-tabs">
              <div className="tabs">
                <ul className="tab-links tabs-mv">
                  <li className="active">
                    <Link href="#overview">Overview</Link>
                  </li>
                  <li>
                    <Link href="#reviews"> Reviews</Link>
                  </li>
                  <li>
                    <Link href="#cast"> Casts </Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="overview" className="tab active">
                    <Row>
                      <Col
                        md={12}
                        sm={12}
                        xs={12}
                        style={{ marginBottom: "24px" }}
                      >
                        <p>{movie?.description}</p>
                        <Row>
                          <Col md={3} className="sb-it">
                            <h6 style={{ color: "white" }}>Director: </h6>
                            <p>
                              <Link href="1">{movie?.director}</Link>
                            </p>
                          </Col>
                          <Col md={3} className="sb-it">
                            <h6 style={{ color: "white" }}>Genres:</h6>
                            <p>
                              {movieGenres?.map((item, index) => (
                                <Link key={item.id} href={item.id}>
                                  {item.name}
                                  {index < movieGenres?.length - 1 && ", "}
                                </Link>
                              ))}
                            </p>
                          </Col>
                          <Col md={3} className="sb-it">
                            <h6 style={{ color: "white" }}>Release Date:</h6>
                            <p>May 1, 2015 (U.S.A)</p>
                          </Col>
                          <Col md={3} className="sb-it">
                            <h6 style={{ color: "white" }}>Run Time:</h6>
                            <p>141 min</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={12} className="title-hd-sm">
                        <h4>cast</h4>
                        <Link href="1" className="time">
                          Full Cast & Crew{" "}
                          <i className="ion-ios-arrow-right"></i>
                        </Link>
                      </Col>
                      <Row style={{ marginLeft: "0px" }}>
                        {movieCasts?.map((item) => (
                          <Col
                            key={item.id}
                            md={3}
                            className="movie-item-style-2 movie-item-style-1"
                            style={{ margin: "0px" }}
                          >
                            <img src={item.img} alt="" />
                            <div className="hvr-inner">
                              <Link href={`cast/${item.id}`}>
                                Read more
                                <i className="ion-android-arrow-dropright"></i>
                              </Link>
                            </div>
                            <div className="mv-item-infor">
                              <h6>
                                <Link href={`cast/${item.id}`}>
                                  {item.name}
                                </Link>
                              </h6>
                            </div>
                          </Col>
                        ))}
                      </Row>

                      <Col md={12} className="title-hd-sm">
                        <h4>Reviews</h4>
                        <Link href="#" className="time">
                          See All 56 Reviews{" "}
                          <i className="ion-ios-arrow-right"></i>
                        </Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12} className="anime__details__form">
                        <Form>
                          <Form.Group controlId="comment">
                            <Form.Control
                              type="text"
                              placeholder="Your Comment"
                              as="textarea"
                            />
                          </Form.Group>
                          <Button type="submit">
                            <i className="fa fa-location-arrow"></i> Review
                          </Button>
                        </Form>
                      </Col>
                      <Col
                        md={12}
                        className="mv-user-review-item"
                        style={{ marginBottom: "28px" }}
                      >
                        <div className="user-infor">
                          <Image
                            src="images/uploads/userava1.jpg"
                            style={{ borderRadius: "20px" }}
                          />
                          <span style={{ paddingLeft: "16px", color: "white" }}>
                            User Name
                          </span>
                          <span
                            style={{ paddingLeft: "16px" }}
                            className="time"
                          >
                            17 December 2016
                          </span>
                        </div>
                        <p>
                          This is by far one of my favorite movies from the MCU.
                          The introduction of new Characters both good and bad
                          also makes the movie more exciting. giving the
                          characters more of a back story can also help
                          audiences relate more to different characters better,
                          and it connects a bond between the audience and actors
                          or characters.
                        </p>
                      </Col>
                      <Col
                        md={12}
                        className="mv-user-review-item"
                        style={{ marginBottom: "28px" }}
                      >
                        <div className="user-infor">
                          <Image
                            src="images/uploads/userava1.jpg"
                            style={{ borderRadius: "20px" }}
                          />
                          <span style={{ paddingLeft: "16px", color: "white" }}>
                            User Name
                          </span>
                          <span
                            style={{ paddingLeft: "16px" }}
                            className="time"
                          >
                            17 December 2016
                          </span>
                        </div>
                        <p>
                          This is by far one of my favorite movies from the MCU.
                          The introduction of new Characters both good and bad
                          also makes the movie more exciting.
                        </p>
                      </Col>
                    </Row>
                  </div>
                  <div id="reviews" className="tab review">
                    <Row>
                      <Col md={12} className="anime__details__form">
                        <Form>
                          <Form.Group controlId="comment">
                            <Form.Control
                              type="text"
                              placeholder="Your Comment"
                              as="textarea"
                            />
                          </Form.Group>
                          <Button type="submit">
                            <i className="fa fa-location-arrow"></i> Review
                          </Button>
                        </Form>
                      </Col>
                      <Col
                        md={12}
                        className="mv-user-review-item"
                        style={{ marginBottom: "28px" }}
                      >
                        <div className="user-infor">
                          <Image
                            src="images/uploads/userava1.jpg"
                            style={{ borderRadius: "20px" }}
                          />
                          <span style={{ paddingLeft: "16px", color: "white" }}>
                            User Name
                          </span>
                          <span
                            style={{ paddingLeft: "16px" }}
                            className="time"
                          >
                            17 December 2016
                          </span>
                        </div>
                        <p>
                          This is by far one of my favorite movies from the MCU.
                          The introduction of new Characters both good and bad
                          also makes the movie more exciting. giving the
                          characters more of a back story can also help
                          audiences relate more to different characters better,
                          and it connects a bond between the audience and actors
                          or characters.
                        </p>
                      </Col>
                      <Col
                        md={12}
                        className="mv-user-review-item"
                        style={{ marginBottom: "28px" }}
                      >
                        <div className="user-infor">
                          <Image
                            src="images/uploads/userava1.jpg"
                            style={{ borderRadius: "20px" }}
                          />
                          <span style={{ paddingLeft: "16px", color: "white" }}>
                            User Name
                          </span>
                          <span
                            style={{ paddingLeft: "16px" }}
                            className="time"
                          >
                            17 December 2016
                          </span>
                        </div>
                        <p>
                          This is by far one of my favorite movies from the MCU.
                          The introduction of new Characters both good and bad
                          also makes the movie more exciting.
                        </p>
                      </Col>
                    </Row>
                  </div>
                  <div id="cast" className="tab">
                    <Row style={{ marginLeft: "0px" }}>
                      <Col
                        md={3}
                        className="movie-item-style-2 movie-item-style-1"
                        style={{ margin: "0px" }}
                      >
                        <img src="images/uploads/ceb1.jpg" alt="" />
                        <div className="hvr-inner">
                          <Link href="moviesingle.html">
                            {" "}
                            Read more{" "}
                            <i className="ion-android-arrow-dropright"></i>{" "}
                          </Link>
                        </div>
                        <div className="mv-item-infor">
                          <h6>
                            <Link href="#">Tom Hardy</Link>
                          </h6>
                        </div>
                      </Col>
                      <Col
                        md={3}
                        className="movie-item-style-2 movie-item-style-1"
                        style={{ margin: "0px" }}
                      >
                        <img src="images/uploads/ceb2.jpg" alt="" />
                        <div className="hvr-inner">
                          <Link href="moviesingle.html">
                            {" "}
                            Read more{" "}
                            <i className="ion-android-arrow-dropright"></i>{" "}
                          </Link>
                        </div>
                        <div className="mv-item-infor">
                          <h6>
                            <Link href="#">Leonardo DiCaprio</Link>
                          </h6>
                        </div>
                      </Col>
                      <Col
                        md={3}
                        className="movie-item-style-2 movie-item-style-1"
                        style={{ margin: "0px" }}
                      >
                        <img src="images/uploads/ceb3.jpg" alt="" />
                        <div className="hvr-inner">
                          <Link href="moviesingle.html">
                            {" "}
                            Read more{" "}
                            <i className="ion-android-arrow-dropright"></i>{" "}
                          </Link>
                        </div>
                        <div className="mv-item-infor">
                          <h6>
                            <Link href="#">Emma Stone</Link>
                          </h6>
                        </div>
                      </Col>
                      <Col
                        md={3}
                        className="movie-item-style-2 movie-item-style-1"
                        style={{ margin: "0px" }}
                      >
                        <img src="images/uploads/ceb4.jpg" alt="" />
                        <div className="hvr-inner">
                          <Link href="moviesingle.html">
                            {" "}
                            Read more{" "}
                            <i className="ion-android-arrow-dropright"></i>{" "}
                          </Link>
                        </div>
                        <div className="mv-item-infor">
                          <h6>
                            <Link href="#">Olga Kurylenko</Link>
                          </h6>
                        </div>
                      </Col>
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
