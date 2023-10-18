import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Card, Image } from "react-bootstrap";
const Movielist = () => {
  return (
	<div>
      <div className="topbar-filter">
        <p>Found <span>3 rates</span> in total</p>
        <Form.Label>Sort by:</Form.Label>
        <Form.Select>
          <option>-- Choose option --</option>
          <option>-- Choose option 2--</option>
        </Form.Select>
      </div>
      <Row>
        <Col md={12}>
          <Card className="movie-item-style-2 userrate">
            <Image src="images/uploads/mv1.jpg" alt="" />
            <Card.Body className="mv-item-infor">
              <Card.Title>
                <a href="#">oblivion <span>(2012)</span></a>
              </Card.Title>
              <p className="time sm-text">your rate:</p>
              <p className="rate">
                <i className="ion-android-star"></i>
                <span>9.0</span> /10
              </p>
              <p className="time sm-text">your reviews:</p>
              <Card.Text>
                Best Marvel movie in my opinion
              </Card.Text>
              <p className="time sm">02 April 2017</p>
              <Card.Text>
                This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting.
                Giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="movie-item-style-2 userrate">
            <Image src="images/uploads/mv2.jpg" alt="" />
            <Card.Body className="mv-item-infor">
              <Card.Title>
                <a href="#">into the wild <span>(2014)</span></a>
              </Card.Title>
              <p className="time sm-text">your rate:</p>
              <p className="rate">
                <i className="ion-android-star"></i>
                <span>7.0</span> /10
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="movie-item-style-2 userrate last">
            <Image src="images/uploads/mv3.jpg" alt="" />
            <Card.Body className="mv-item-infor">
              <Card.Title>
                <a href="#">blade runner<span>(2015)</span></a>
              </Card.Title>
              <p className="time sm-text">your rate:</p>
              <p className="rate">
                <i className="ion-android-star"></i>
                <span>10.0</span> /10
              </p>
              <p className="time sm-text">your reviews:</p>
              <Card.Text>
                A masterpiece!
              </Card.Text>
              <p className="time sm">01 February 2017</p>
              <Card.Text>
                To put it simply, the movie is fascinating, exciting, and fantastic. The dialog, the fight choreography, the way the story moves, the characters' charisma, all and much more are combined together to deliver this masterpiece. Such an amazing flow, providing a fusion between the 90s and the new century, it's like the assassins are living in another world, with another mindset, without people understanding it. Just one advice for you though: Don't build an expectation of what you want to watch in this movie; if you do, then you will ruin it. This movie has its flow and movement, so watch it with a clear mind and have fun.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="topbar-filter">
        <Form.Label>Movies per page:</Form.Label>
        <Form.Select>
          <option>20 Movies</option>
          <option>10 Movies</option>
        </Form.Select>
        <div className="pagination2">
          <span>Page 1 of 1:</span>
          <Button className="active" href="#">1</Button>
          <Button href="#"><i className="ion-arrow-right-b"></i></Button>
        </div>
      </div>
    </div>
    
  );
};

export default Movielist;
