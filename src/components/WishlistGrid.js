import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
export default function WishlistGrid() {
  return (
	
		<div>
		  <div className="topbar-filter">
		  <p>
      Found <span>1,608 movies</span> in total
    </p>
			<label>Sort by:</label>
			<select>
			  <option value="popularity">Popularity Descending</option>
			  <option value="popularity">Popularity Ascending</option>
			  <option value="rating">Rating Descending</option>
			  <option value="rating">Rating Ascending</option>
			  <option value="date">Release date Descending</option>
			  <option value="date">Release date Ascending</option>
			</select>
			<Link to={'/wishlist'} className="list">
			  <i className="ion-ios-list-outline"></i>
			</Link>
			<Link to={'/wishlistgrid'} className="grid">
			  <i className="ion-grid active"></i>
			</Link>
		  </div>
		  <div >
			<Row>
			  <Col md={3} className="movie-item-style-2 movie-item-style-1">
				<img src="images/uploads/mv1.jpg" alt="" />
				<div className="hvr-inner">
				  <Link href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </Link>
				</div>
				<div className="mv-item-infor">
				  <h6><Link href="#">oblivion</Link></h6>
				  <p className="rate"><i className="ion-android-star"></i><span>8.1</span> /10</p>
				</div>
			  </Col>
			  <Col md={3} className="movie-item-style-2 movie-item-style-1">
				<img src="images/uploads/mv2.jpg" alt="" />
				<div className="hvr-inner">
				  <Link href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </Link>
				</div>
				<div className="mv-item-infor">
				  <h6><Link href="#">into the wild</Link></h6>
				  <p className="rate"><i className="ion-android-star"></i><span>7.8</span> /10</p>
				</div>
			  </Col>
			  {/* Add more movie items here */}
			</Row>
		  </div>
		  <div className="topbar-filter">
			<label>Movies per page:</label>
			<select>
			  <option value="range">20 Movies</option>
			  <option value="saab">10 Movies</option>
			</select>
	
			<div className="pagination2">
			  <span>Page 1 of 2:</span>
			  <Link className="active" href="#">1</Link>
			  <Link href="#">2</Link>
			  <Link href="#">3</Link>
			  <Link href="#">...</Link>
			  <Link href="#">78</Link>
			  <Link href="#">79</Link>
			  <Link href="#"><i className="ion-arrow-right-b"></i></Link>
			</div>
		  </div>
		</div>
);
};

