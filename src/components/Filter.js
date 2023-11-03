import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";


export default function Filter() {
	const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(10);

  const handleRangeChange = (e) => {
    setMinRating(e.target.value);
  };

  const handleMaxRangeChange = (e) => {
    setMaxRating(e.target.value);
  };
	return (
		<div style={{ paddingTop: '280px' }}>
			<div className="sidebar">
				<div className="search-form">
					<h4 className="sb-title">Search for movie</h4>
					<Form className="form-style-1" action="#">
						<Row>
							<Col md={12} className="form-it">
								<Form.Group controlId="genres">
									<Form.Label>Genres</Form.Label>
									<InputGroup style={{ width: '100%' }}>
										<Form.Control as="select" name="skills" multiple className="ui fluid dropdown" >
											<option value="">Enter to filter genres</option>
											<option value="Action1">Action 1</option>
											<option value="Action2">Action 2</option>
											<option value="Action3">Action 3</option>
											<option value="Action4">Action 4</option>
											<option value="Action5">Action 5</option>
										</Form.Control>
									</InputGroup>
								</Form.Group>
							</Col>
							<Col md={12} className="form-it">
								<Form.Group controlId="ratingRange">
									<Form.Label>Rating Range</Form.Label>
									<Form.Control type="range" min="0" max="10" step="1" />
								</Form.Group>
							</Col>
							<Col md={12} className="form-it">
								<Form.Group controlId="releaseYear">
									<Form.Label>Release Year</Form.Label>
									<Row>
										<Col md={6}>
											<Form.Control as="select">
												<option value="range">From</option>
												<option value="number">10</option>
											</Form.Control>
										</Col>
										<Col md={6}>
											<Form.Control as="select">
												<option value="range">To</option>
												<option value="number">20</option>
											</Form.Control>
										</Col>
									</Row>
								</Form.Group>
							</Col>
						</Row>
					</Form>
				</div>
				<div className="ads">
					<img src="images/uploads/ads1.png" alt="" />
				</div>
				<div className="sb-facebook sb-it">
					<h4 className="sb-title">Find us on Facebook</h4>
					<iframe
						src="#"
						data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftemplatespoint.net%2F%3Ffref%3Dts&tabs=timeline&width=340&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
						height="315"
						style={{ width: '100%', border: 'none', overflow: 'hidden' }}
					></iframe>
				</div>
				<div className="sb-twitter sb-it">
					<h4 className="sb-title">Tweet to us</h4>
					<div className="slick-tw">
						<div className="tweet item" id=""></div>
						<div className="tweet item" id=""></div>
					</div>
				</div>
			</div>
		</div>
	);
};

