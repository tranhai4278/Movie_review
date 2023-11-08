import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9999/rate")
      .then((res) => setRates(res.data))
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:9999/movie")
      .then((response) => response.data)
      .then((data) => {
        const randomMovies = getRandomMovies(data, 4);
        setMovies(randomMovies);
      });
  }, []);

  const getRandomMovies = (array, n) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };
  const getAverageRating = (movieId) => {
    const movieRatings = rates.filter((rate) => rate.movie_id === movieId);
    if (movieRatings.length === 0) {
      return "N/A";
    }
    const totalRating = movieRatings.reduce((acc, rate) => acc + rate.rating, 0);
    const averageRating = totalRating / movieRatings.length;
    return averageRating.toFixed(1);
  };
  return (
    <>
      <div className="slider movie-items">
        <Container>
          <Row>
            <Col className="social-link">
              <p>Follow us: </p>
              <Link >
                <i className="ion-social-facebook"></i>
              </Link>
              <Link >
                <i className="ion-social-twitter"></i>
              </Link>
              <Link >
                <i className="ion-social-googleplus"></i>
              </Link>
              <Link >
                <i className="ion-social-youtube"></i>
              </Link>
            </Col>


            <div className="slick-multiItemSlider">
              {movies.map((movie) => (
                <Col md={3} className="movie-item" style={{ width: '270px' }}>
                  <div className="mv-img">
                    <Link >
                      <img
                        src={movie.img_url}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="blue">
                        <Link ></Link>
                      </span>
                    </div>
                    <h6>
                      <Link >{movie.name}</Link>
                    </h6>
                    <p>
                      <i className="ion-android-star"></i>
                      <span>{getAverageRating(movie.id)}</span> /10
                    </p>
                  </div>
                </Col>
              ))}
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
                <Link className="viewall">
                  View all <i className="ion-ios-arrow-right"></i>
                </Link>
              </div>
              <div className="tabs">
                <ul className="tab-links">
                  <li className="active">
                    <Link href="#tab1">#Popular</Link>
                  </li>
                  <li>
                    <Link href="#tab2"> #Coming soon</Link>
                  </li>
                  <li>
                    <Link href="#tab3"> #Top rated </Link>
                  </li>
                  <li>
                    <Link href="#tab4"> #Most reviewed</Link>
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
                              <Link to={'/moviedetail'}>Read more<i className="ion-android-arrow-dropright"></i></Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >Interstellar</Link>
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
                              <Link to={'/moviedetail'}>Read more<i className="ion-android-arrow-dropright"></i></Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >The revenant</Link>
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
                              <Link to={'/moviedetail'}>Read more<i className="ion-android-arrow-dropright"></i></Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >Die hard</Link>
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
                              {/* <Link href="moviesingle.html">
                                  {" "}
                                  Read more{" "}
                                  </i>{" "}
                                </Link> */}
                              <Link to={'/moviedetail'}>Read more<i className="ion-android-arrow-dropright"></i></Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >The walk</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >Interstellar</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >The revenant</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >Die hard</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >The walk</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >Die hard</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >Interstellar</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >The revenant</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >Die hard</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >The walk</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >Die hard</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >Interstellar</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >The revenant</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >Die hard</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >The walk</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >Die hard</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >Interstellar</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >The revenant</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >Die hard</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >The walk</Link>
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
                              <Link href="moviesingle.html">
                                {" "}
                                Read more{" "}
                                <i className="ion-android-arrow-dropright"></i>{" "}
                              </Link>
                            </div>
                            <div className="title-in">
                              <h6>
                                <Link >Die hard</Link>
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
                    <Link >
                      <img
                        src="images/uploads/ava1.jpg"
                        alt=""
                        width="70"
                        height="70"
                      />
                    </Link>
                    <div className="celeb-author">
                      <h6>
                        <Link >Samuel N. Jack</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="celeb-item">
                    <Link >
                      <img
                        src="images/uploads/ava2.jpg"
                        alt=""
                        width="70"
                        height="70"
                      />
                    </Link>
                    <div className="celeb-author">
                      <h6>
                        <Link >Benjamin Carroll</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="celeb-item">
                    <Link >
                      <img
                        src="images/uploads/ava3.jpg"
                        alt=""
                        width="70"
                        height="70"
                      />
                    </Link>
                    <div className="celeb-author">
                      <h6>
                        <Link >Beverly Griffin</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="celeb-item">
                    <Link >
                      <img
                        src="images/uploads/ava4.jpg"
                        alt=""
                        width="70"
                        height="70"
                      />
                    </Link>
                    <div className="celeb-author">
                      <h6>
                        <Link >Justin Weaver</Link>
                      </h6>
                    </div>
                  </div>
                  <Link className="btn">
                    See all celebrities<i className="ion-ios-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



