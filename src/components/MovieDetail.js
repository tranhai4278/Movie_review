import React, { useEffect, useState } from "react";
<<<<<<< HEAD

import { Row, Col, Button, Form, Image } from "react-bootstrap";
import axios from "axios";
import { FacebookShareButton, FacebookIcon } from "react-share";

import MovieDetailComment from "./MovieDetailComment";
import { getCurrentDate } from "./MovieDetailService";
import { useParams } from "react-router-dom";
=======
import { Link, useParams } from "react-router-dom";

import { Row, Col, Button, Form, Image } from "react-bootstrap";
import axios from "axios";
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad

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

<<<<<<< HEAD
  const { id } = useParams();
  const { userId } = { userId: 1 };
  // Data moive detail
  const [movie, setMovie] = useState({});

=======
  // const {id} = useParams();
  const { id } = { id: 1 };
  // Data moive detail
  const [movie, setMovie] = useState({});

  // rates total
  const [usersRate, setUsersRate] = useState([]);

>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
  // Genres of this moive
  const [movieGenres, setMovieGenres] = useState([]);

  // Casts of this moive
  const [movieCasts, setMovieCasts] = useState([]);

<<<<<<< HEAD
  // Comments of this moive
  const [movieComments, setMovieComments] = useState([]);

  // Comment value to this moive
  const [myComment, setMyComment] = useState("");

  // error comment blank
  const [errBlankComment, setErrBlankComment] = useState("");

  // rates total
  const [usersRate, setUsersRate] = useState([]);

  // Rate value to this moive
  const [myRate, setMyRate] = useState({ rating: 0 });

  // render Start for rating
  const [renderStars, setRenderStarts] = useState([]);

=======
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
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
<<<<<<< HEAD
=======
   * Init: fetch total rating data by movie_id
   */
  useEffect(() => {
    axios
      .get(`http://localhost:9999/rate?movie_id=${id}`)
      .then((response) => response.data)
      .then((data) => setUsersRate(data));
  }, [id]);

  /**
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
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

<<<<<<< HEAD
  /**
   * Init: fetch total review by movie_id
   */
  useEffect(() => {
    fetchCommnentByMovieId();
  }, [id]);

  const fetchCommnentByMovieId = () => {
    axios
      // fetch all user
      .get(`http://localhost:9999/user`)
      .then((response) => response.data)
      .then((dataUsers) => {
        // fetch all review by movie_id
        axios
          .get(`http://localhost:9999/comment?movie_id=${id}`)
          .then((response) => response.data)
          .then((data) => {
            const nestedComments = nestComments(
              data.map((item) => ({
                ...item,
                user: dataUsers.find((user) => user.user_id === item.user_id),
              }))
            );
            setMovieComments(nestedComments);
          });
      });
  };

  /**
   * convert comment array to nestedcomment by parent_comment_id
   */
  const nestComments = (comments) => {
    const commentMap = {};
    const nestedComments = [];

    comments.forEach((comment) => {
      commentMap[comment.id] = comment;
      comment.replies = [];
    });

    comments.forEach((comment) => {
      if (comment.parent_comment_id) {
        commentMap[comment.parent_comment_id].replies.push(comment);
      } else {
        nestedComments.push(comment);
      }
    });

    return nestedComments;
  };

  /**
   * submit my comment
   */
  const handleSubmitComment = (data) => {
    if (data.content.trim() === "") {
      setErrBlankComment("Please enter comment before submit");
    } else {
      axios
        .post("http://localhost:9999/comment", data)
        .then((response) => response.data)
        .then((data) => {
          setMyComment("");
          fetchCommnentByMovieId();
          setErrBlankComment("");
        });
    }
  };

  /**
   * Init: fetch total rating data by movie_id
   */
  useEffect(() => {
    axios
      .get(`http://localhost:9999/rate?movie_id=${id}`)
      .then((response) => response.data)
      .then((data) => setUsersRate(data.filter((item) => item.rating)));
  }, [id, myRate]);

  /**
   * Init: fetch total rating data by movie_id and user_id
   */
  useEffect(() => {
    axios
      .get(`http://localhost:9999/rate?movie_id=${id}&user_id=${userId}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.length !== 0) {
          setMyRate(data[0]);
        }
      });
  }, [id]);

  /**
   * Render starts rating
   */
  useEffect(() => {
    const elements = [];
    for (let i = 1; i <= 10; i++) {
      elements.push(
        i <= myRate.rating ? (
          <Col>
            <i
              onClick={() => handleRating(i)}
              className="ion-android-star"
              style={starStyle}
            ></i>
          </Col>
        ) : (
          <Col>
            <i
              onClick={() => handleRating(i)}
              className="ion-ios-star-outline"
              style={starStyle}
            ></i>
          </Col>
        )
      );
    }
    setRenderStarts(elements);
  }, [myRate]);

  const handleRating = (rating) => {
    if (myRate.rating !== 0) {
      axios
        .put(`http://localhost:9999/rate/${myRate.id}`, {
          ...myRate,
          rating,
        })
        .then((response) => response.data)
        .then((data) => setMyRate(data));
    } else {
      axios
        .post(`http://localhost:9999/rate`, {
          movie_id: id,
          user_id: userId,
          rating,
          create_at: getCurrentDate(),
          status: "todo",
        })
        .then((response) => response.data)
        .then((data) => setMyRate(data));
    }
  };
=======
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
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
<<<<<<< HEAD
                  <a
=======
                  <Link
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
                    href={movie?.trailers_url}
                    className="item item-2 redbtn fancybox-media hvr-grow"
                  >
                    <i className="ion-play"></i>
<<<<<<< HEAD
                  </a>
=======
                  </Link>
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
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
<<<<<<< HEAD
              <a href="javascript:void(0)" className="parent-btn">
                <i className="ion-heart"></i> Add to Favorite
              </a>
              <div className="hover-bnt">
                <a href="javascript:void(0)" className="parent-btn">
                  <i className="ion-android-share-alt"></i>share
                </a>
                <div className="hvr-item">
                  <a href="javascript:void(0)" className="hvr-grow">
                    <FacebookShareButton
                      url={movie?.trailers_url}
                      hashtag="fermovie"
                    >
                      <i className="ion-social-facebook"></i>
                    </FacebookShareButton>
                  </a>
                  <a href="javascript:void(0)" className="hvr-grow">
                    <i className="ion-social-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="hvr-grow">
                    <i className="ion-social-googleplus"></i>
                  </a>
                  <a href="javascript:void(0)" className="hvr-grow">
                    <i className="ion-social-youtube"></i>
                  </a>
=======
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
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
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
<<<<<<< HEAD
                        {(
                          usersRate?.reduce(
                            (totalRate, currentItem) =>
                              totalRate + currentItem.rating,
                            0
                          ) / usersRate?.length
                        ).toFixed(1)}
=======
                        {usersRate?.reduce(
                          (totalRate, currentItem) =>
                            totalRate + currentItem.rating,
                          0
                        ) / usersRate?.length}
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
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
<<<<<<< HEAD
                  {renderStars}
=======
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
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
                </Row>
              </Col>
            </Row>
            <div className="movie-tabs">
              <div className="tabs">
                <ul className="tab-links tabs-mv">
                  <li className="active">
<<<<<<< HEAD
                    <a href="#overview">Overview</a>
                  </li>
                  <li>
                    <a href="#reviews"> Reviews</a>
                  </li>
                  <li>
                    <a href="#cast"> Casts </a>
=======
                    <Link href="#overview">Overview</Link>
                  </li>
                  <li>
                    <Link href="#reviews"> Reviews</Link>
                  </li>
                  <li>
                    <Link href="#cast"> Casts </Link>
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
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
<<<<<<< HEAD
                              <a href="javascript:void(0)">{movie?.director}</a>
=======
                              <Link href="1">{movie?.director}</Link>
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
                            </p>
                          </Col>
                          <Col md={3} className="sb-it">
                            <h6 style={{ color: "white" }}>Genres:</h6>
                            <p>
                              {movieGenres?.map((item, index) => (
<<<<<<< HEAD
                                <a key={item.id} href={item.id}>
                                  {item.name}
                                  {index < movieGenres?.length - 1 && ", "}
                                </a>
=======
                                <Link key={item.id} href={item.id}>
                                  {item.name}
                                  {index < movieGenres?.length - 1 && ", "}
                                </Link>
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
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
<<<<<<< HEAD
=======
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
                            <img src="images/uploads/ceb1.jpg" alt="" />
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
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
                    </Row>
                  </div>
                  <div id="reviews" className="tab review">
                    <Row>
                      <Col md={12} className="anime__details__form">
                        <Form>
                          <Form.Group controlId="comment">
                            <Form.Control
<<<<<<< HEAD
                              value={myComment}
                              onChange={(e) => setMyComment(e.target.value)}
=======
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
                              type="text"
                              placeholder="Your Comment"
                              as="textarea"
                            />
                          </Form.Group>
<<<<<<< HEAD
                          {errBlankComment !== "" && (
                            <div class="alert alert-danger">
                              {errBlankComment}
                            </div>
                          )}
                          <Button
                            type="button"
                            onClick={() =>
                              handleSubmitComment({
                                movie_id: id,
                                user_id: 1,
                                content: myComment,
                                create_at: getCurrentDate(),
                                status: "todo",
                                parent_comment_id: null,
                              })
                            }
                          >
=======
                          <Button type="submit">
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
                            <i className="fa fa-location-arrow"></i> Review
                          </Button>
                        </Form>
                      </Col>
<<<<<<< HEAD
                      {movieComments?.map((item, index) => (
                        <div key={index} style={{ marginBottom: "20px" }}>
                          <MovieDetailComment
                            handleSubmitComment={handleSubmitComment}
                            data={item}
                            isParent
                            movieId={id}
                            userId={userId}
                          />
                        </div>
                      ))}
=======
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
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
                    </Row>
                  </div>
                  <div id="cast" className="tab">
                    <Row style={{ marginLeft: "0px" }}>
<<<<<<< HEAD
                      {movieCasts?.map((item) => (
                        <Col
                          key={item.id}
                          md={3}
                          className="movie-item-style-2 movie-item-style-1"
                          style={{ margin: "0px" }}
                        >
                          <img src={item.img} alt="" />
                          <div className="hvr-inner">
                            <a href={`cast/${item.id}`}>
                              Read more
                              <i className="ion-android-arrow-dropright"></i>
                            </a>
                          </div>
                          <div className="mv-item-infor">
                            <h6>
                              <a href={`cast/${item.id}`}>{item.name}</a>
                            </h6>
                          </div>
                        </Col>
                      ))}
=======
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
>>>>>>> 0a39cafb1863b54458ddf0007676c086cca054ad
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
