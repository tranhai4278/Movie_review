import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, Image } from "react-bootstrap";

export default function MovieDetail() {
	const starStyle = {
		fontSize: '36px',
		color: '#f5b50a'
	}

	const rateStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		borderLeft: '1px solid #405266',
		paddingLeft: '30px',
		height: '54px'
	};
	return (
		<div style={{ paddingTop: '220px' }}>
			<Row className="ipad-width2">
				<Col md={4} sm={12} xs={12}>
					<div className="movie-img sticky-sb">
						<Image src="images/uploads/movie-single.jpg" alt="" fluid />
						<div className="movie-btn">
							<div className="btn-transform transform-vertical red" style={{ width: '95%', marginTop: '24px' }}>
								<div>
									<Button className="item item-1" variant="danger" size="lg">
										<i className="ion-play"></i> Watch Trailer
									</Button>
								</div>
								<div>
									<a href="https://www.youtube.com/embed/o-0hcF97wy0" className="item item-2 redbtn fancybox-media hvr-grow">
										<i className="ion-play"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<Col md={12} style={{ paddingTop: '28px', paddingLeft: '0px' }}>
						<Image src="images/uploads/ads1.png" alt="" />
					</Col>
				</Col>
				<Col md={8} sm={12} xs={12} >
					<div className="movie-single-ct main-content">
						<h1 className="bd-hd">Skyfall: Quantum of Spectre <span>2015</span></h1>
						<div className="social-btn">
							<a href="#" className="parent-btn"><i className="ion-heart"></i> Add to Favorite</a>
							<div className="hover-bnt">
								<a href="#" className="parent-btn"><i className="ion-android-share-alt"></i>share</a>
								<div className="hvr-item">
									<a href="#" className="hvr-grow"><i className="ion-social-facebook"></i></a>
									<a href="#" className="hvr-grow"><i className="ion-social-twitter"></i></a>
									<a href="#" className="hvr-grow"><i className="ion-social-googleplus"></i></a>
									<a href="#" className="hvr-grow"><i className="ion-social-youtube"></i></a>
								</div>
							</div>
						</div>
						<Row className="movie-rate">
							<Col md={3} xs={12}>
								<Row className="rate" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
									<Col md={3} xs={12}><i className="ion-android-star" style={{ fontSize: '36px', color: '#f5b50a' }}></i></Col>
									<Col md={9} xs={12}><p>
										<span style={{ color: 'white', fontSize: '18px' }}>8.1</span> /10
										<br />
										<span className="rv" style={{ color: '#337AB7' }}>56 Reviews</span>
									</p></Col>

								</Row>
							</Col>
							<Col md={9} xs={12} style={{ marginLeft: '-34px' }}>
								<Row className="rate-star" style={rateStyle}>
									<Col><h4 style={{ color: '#abb7c4', marginRight: '20px' }}>Rate This Movie:</h4></Col>
									<Col><i className="ion-android-star" style={starStyle}></i> </Col>
									<Col><i className="ion-android-star" style={starStyle}></i> </Col>
									<Col><i className="ion-android-star" style={starStyle}></i> </Col>
									<Col><i className="ion-android-star" style={starStyle}></i> </Col>
									<Col><i className="ion-android-star" style={starStyle}></i> </Col>
									<Col><i className="ion-android-star" style={starStyle}></i> </Col>
									<Col><i className="ion-android-star" style={starStyle}></i> </Col>
									<Col><i className="ion-android-star" style={starStyle}></i> </Col>
									<Col><i className="ion-ios-star-outline" style={starStyle}></i> </Col>
									<Col><i className="ion-ios-star-outline" style={starStyle}></i> </Col>
								</Row>
							</Col>
						</Row>
						<div className="movie-tabs">
							<div className="tabs">
								<ul className="tab-links tabs-mv">
									<li className="active"><a href="#overview">Overview</a></li>
									<li><a href="#reviews"> Reviews</a></li>
									<li><a href="#cast">  Casts </a></li>
								</ul>
								<div className="tab-content">
									<div id="overview" className="tab active">
										<Row >
											<Col md={12} sm={12} xs={12} style={{ marginBottom: '24px' }}>
												<p>
													Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction.
												</p>
												<Row>
													<Col md={3} className="sb-it">
														<h6 style={{ color: 'white' }}>Director: </h6>
														<p><a href="#">Joss Whedon</a></p>
													</Col>
													<Col md={3} className="sb-it">
														<h6 style={{ color: 'white' }}>Genres:</h6>
														<p><a href="#">Action, </a> <a href="#">Sci-Fi,</a> <a href="#">Adventure</a></p>
													</Col>
													<Col md={3} className="sb-it">
														<h6 style={{ color: 'white' }}>Release Date:</h6>
														<p>May 1, 2015 (U.S.A)</p>
													</Col>
													<Col md={3} className="sb-it">
														<h6 style={{ color: 'white' }}>Run Time:</h6>
														<p>141 min</p>
													</Col>
												</Row>
											</Col>
											<Col md={12} className="title-hd-sm">
												<h4>cast</h4>
												<a href="#" className="time">
													Full Cast & Crew <i className="ion-ios-arrow-right"></i>
												</a>
											</Col>
											<Row style={{ marginLeft: '0px' }}>
												<Col md={3} className="movie-item-style-2 movie-item-style-1" style={{ margin: '0px' }}>
													<img src="images/uploads/ceb1.jpg" alt="" />
													<div className="hvr-inner">
														<a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
													</div>
													<div className="mv-item-infor">
														<h6><a href="#">Tom Hardy</a></h6>
													</div>
												</Col>
												<Col md={3} className="movie-item-style-2 movie-item-style-1" style={{ margin: '0px' }}>
													<img src="images/uploads/ceb2.jpg" alt="" />
													<div className="hvr-inner">
														<a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
													</div>
													<div className="mv-item-infor">
														<h6><a href="#">Leonardo DiCaprio</a></h6>
													</div>
												</Col>
												<Col md={3} className="movie-item-style-2 movie-item-style-1" style={{ margin: '0px' }}>
													<img src="images/uploads/ceb3.jpg" alt="" />
													<div className="hvr-inner">
														<a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
													</div>
													<div className="mv-item-infor">
														<h6><a href="#">Emma Stone</a></h6>
													</div>
												</Col>
												<Col md={3} className="movie-item-style-2 movie-item-style-1" style={{ margin: '0px' }}>
													<img src="images/uploads/ceb4.jpg" alt="" />
													<div className="hvr-inner">
														<a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
													</div>
													<div className="mv-item-infor">
														<h6><a href="#">Olga Kurylenko</a></h6>
													</div>
												</Col>
											</Row>

											<Col md={12} className="title-hd-sm">
												<h4>Reviews</h4>
												<a href="#" className="time">
													See All 56 Reviews <i className="ion-ios-arrow-right"></i>
												</a>
											</Col>
										</Row>
										<Row>
											<Col md={12} className="anime__details__form">
												<Form>
													<Form.Group controlId="comment">
														<Form.Control type="text" placeholder="Your Comment" as="textarea" />
													</Form.Group>
													<Button type="submit">
														<i className="fa fa-location-arrow"></i> Review
													</Button>
												</Form>
											</Col>
											<Col md={12} className="mv-user-review-item" style={{ marginBottom: '28px' }}>
												<div className="user-infor">
													<Image src="images/uploads/userava1.jpg" style={{ borderRadius: '20px' }} />
													<span style={{ paddingLeft: '16px', color: 'white' }}>User Name</span>
													<span style={{ paddingLeft: '16px' }} className="time">
														17 December 2016
													</span>
												</div>
												<p>
													This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters.
												</p>
											</Col>
											<Col md={12} className="mv-user-review-item" style={{ marginBottom: '28px' }}>
												<div className="user-infor">
													<Image src="images/uploads/userava1.jpg" style={{ borderRadius: '20px' }} />
													<span style={{ paddingLeft: '16px', color: 'white' }}>User Name</span>
													<span style={{ paddingLeft: '16px' }} className="time">
														17 December 2016
													</span>
												</div>
												<p>
													This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting.
												</p>
											</Col>
										</Row>
									</div>
									<div id="reviews" className="tab review">
										<Row>
											<Col md={12} className="anime__details__form">
												<Form>
													<Form.Group controlId="comment">
														<Form.Control type="text" placeholder="Your Comment" as="textarea" />
													</Form.Group>
													<Button type="submit">
														<i className="fa fa-location-arrow"></i> Review
													</Button>
												</Form>
											</Col>
											<Col md={12} className="mv-user-review-item" style={{ marginBottom: '28px' }}>
												<div className="user-infor">
													<Image src="images/uploads/userava1.jpg" style={{ borderRadius: '20px' }} />
													<span style={{ paddingLeft: '16px', color: 'white' }}>User Name</span>
													<span style={{ paddingLeft: '16px' }} className="time">
														17 December 2016
													</span>
												</div>
												<p>
													This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters.
												</p>
											</Col>
											<Col md={12} className="mv-user-review-item" style={{ marginBottom: '28px' }}>
												<div className="user-infor">
													<Image src="images/uploads/userava1.jpg" style={{ borderRadius: '20px' }} />
													<span style={{ paddingLeft: '16px', color: 'white' }}>User Name</span>
													<span style={{ paddingLeft: '16px' }} className="time">
														17 December 2016
													</span>
												</div>
												<p>
													This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting.
												</p>
											</Col>
										</Row>
									</div>
									<div id="cast" className="tab">
										<Row style={{ marginLeft: '0px' }}>
											<Col md={3} className="movie-item-style-2 movie-item-style-1" style={{ margin: '0px' }}>
												<img src="images/uploads/ceb1.jpg" alt="" />
												<div className="hvr-inner">
													<a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
												</div>
												<div className="mv-item-infor">
													<h6><a href="#">Tom Hardy</a></h6>
												</div>
											</Col>
											<Col md={3} className="movie-item-style-2 movie-item-style-1" style={{ margin: '0px' }}>
												<img src="images/uploads/ceb2.jpg" alt="" />
												<div className="hvr-inner">
													<a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
												</div>
												<div className="mv-item-infor">
													<h6><a href="#">Leonardo DiCaprio</a></h6>
												</div>
											</Col>
											<Col md={3} className="movie-item-style-2 movie-item-style-1" style={{ margin: '0px' }}>
												<img src="images/uploads/ceb3.jpg" alt="" />
												<div className="hvr-inner">
													<a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
												</div>
												<div className="mv-item-infor">
													<h6><a href="#">Emma Stone</a></h6>
												</div>
											</Col>
											<Col md={3} className="movie-item-style-2 movie-item-style-1" style={{ margin: '0px' }}>
												<img src="images/uploads/ceb4.jpg" alt="" />
												<div className="hvr-inner">
													<a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
												</div>
												<div className="mv-item-infor">
													<h6><a href="#">Olga Kurylenko</a></h6>
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
};

